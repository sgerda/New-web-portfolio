import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
  constructor(private eRef: ElementRef) {}

  githubUrl: string ='https://github.com/sgerda'
  linkedInUrl: string ='https://www.linkedin.com/in/saul-gerda-4b86b5284/'

  isSidebarActive: boolean= false;
  toggleSidebar(){
    this.isSidebarActive = !this.isSidebarActive;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (window.innerWidth < 768 && !this.eRef.nativeElement.contains(event.target)) {
      this.isSidebarActive = false;
    }
  }
  

  

}
