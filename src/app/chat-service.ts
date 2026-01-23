import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_KEY } from "../../.api_key/API_KEY";

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    // If using Nginx Proxy Manager, this is likely just the Pi's IP or your domain
    private apiUrl = API_KEY;

    constructor(private http: HttpClient) {}

    // We pass the full history to keep the bot "context-aware"
    sendMessage(userMsg: string, chatHistory: any[]): Observable<any> {
        const body = {
            history: [
                ...chatHistory.map(m => ({
                    role: m.sender === 'user' ? 'user' : 'assistant',
                    content: m.text
                })),
                { role: 'user', content: userMsg }
            ]
        };

        return this.http.post<any>(this.apiUrl, body);
    }
}