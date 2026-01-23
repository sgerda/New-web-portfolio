import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from "./side-bar/side-bar";
import { TopBar } from "./top-bar/top-bar";
import { ChatService } from './chat-service';


interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-root',
  imports: [SideBar, TopBar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message = signal<Message[]>([]);
  userInput: string = '';

  async handleSend() {
    if (!this.userInput.trim()) return;

    const userMsg = this.userInput;
    this.userInput = ''; 

    // 1. Add user message
    this.message.update(prev => [...prev, { text: userMsg, sender: 'user' }]);

    // 2. Add an empty bot message to fill as the stream arrives
    this.message.update(prev => [...prev, { text: '', sender: 'bot' }]);

    try {
      const response = await fetch('http://192.168.1.144:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: this.message().map(m => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text
          }))
        })
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // 3. Read the stream word-by-word
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        // 4. Update the bot message in real-time
        this.message.update(prev => {
          const last = prev[prev.length - 1];
          const updatedLast = { ...last, text: last.text + chunk };
          return [...prev.slice(0, -1), updatedLast];
        });
      }
    } catch (err) {
      console.error("Stream error:", err);
      this.message.update(prev => {
        const last = prev[prev.length - 1];
        // Only show error if we got absolutely no text back
        if (last.text.length === 0) {
          return [...prev.slice(0, -1), { text: "Connection error.", sender: 'bot' }];
        }
        return prev;
      });
    }
  }
}
