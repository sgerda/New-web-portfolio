import { CommonModule } from '@angular/common';
import { Component, Directive, ElementRef, Renderer2, 
  Inject, PLATFORM_ID, OnInit, OnDestroy, Input, 
  HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';




interface CardData {
  id: number;
  git: string;
  git_link?: string;
  title: string; 
  description: string;
  image: string;
  color?: string;
  bulletPoints?: string[];
}


@Directive({
  selector: '[appProjectsTab]',
  standalone: true
})
export class ProjectsTab implements OnInit, OnDestroy{
  @Input() stackFactor = 0.05;
  @Input() blurMax = 3;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        root: null,
        threshold: this.createThresholds(100)
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const ratio = entry.intersectionRatio;
          const scale = 1.09 - ((1 - ratio) * this.stackFactor);
          const blur = (1 - ratio) * this.blurMax;
          const opacity = 0.5 + (ratio * 0.5);

          this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
          this.renderer.setStyle(this.el.nativeElement, 'filter', `blur(${blur}px)`);
          this.renderer.setStyle(this.el.nativeElement, 'opacity', opacity);
        });
      }, options);

      this.observer.observe(this.el.nativeElement);
    }
  }

  private createThresholds(num: number){
    return Array.from({length: num +1}, (_,i) => i/num).reverse();
  }
  ngOnDestroy(){
    if (isPlatformBrowser(this.platformId) && this.observer) {
      this.observer.disconnect();
    }

    
  }

}

@Component({
  selector: 'app-projects-tab',
  standalone: true,
  imports: [ProjectsTab, CommonModule],
  templateUrl: './projects-tab.html',
  styleUrl: './projects-tab.css',
})


export class ProjectsTabComponent {

  project_lnk1: string ='https://github.com/sgerda/New-web-portfolio'

  cards: CardData[] = [
    {
      id: 1,
      git: '/bx-github.svg',
      git_link: 'https://github.com/sgerda/New-web-portfolio',
      title: 'Portfolio & Chatty',
      description: 'This portfolio is also one of my personal projects, built as a way to create something truly tailored to me. Rather than using a template, I chose to design and build it from the ground up. The site is developed using Angular and TypeScript, technologies I learned specifically for this project. A key feature of the portfolio is an interactive chatbot that helps potential employers learn more about me in an engaging way. The chatbot is powered by a Retrieval-Augmented Generation (RAG) pipeline and a lightweight Ollama model running on my own Raspberry Pi server. I implemented the chatbot backend in Python using a custom API. The entire system—including the web application and chatbot backend—is self-hosted, containerized with Docker, and fully managed on my personal server.',
      bulletPoints: ['TypeScript, Angular, Python, Docker, Ollama, RAG, CSS'],
      image: '/portfolio.png',
      color: '#205a05'
    },
    {
      id: 2,
      git: '/bx-github.svg',
      title: 'Master\'s Thesis IDS Project',
      description: 'For my Master\’s thesis, I engineered and deployed a comparative IDS framework on a Raspberry Pi server to evaluate the feasibility of adaptive security at the edge. The project involved developing a Random Forest baseline and a Deep Q-Network (DQN) agent using a custom-built Gymnasium environment to process high-velocity network traffic from the CIC-IDS-2017 dataset. To test model generalization, I isolated specific attack vectors to simulate "zero-day" vulnerabilities, measuring how each learning paradigm adapts to unseen patterns in real-time.',
      bulletPoints: ['Networking, Research, Data Engineer, Machine Learning, Python'],
      image: '/IDS.png',
      color: '#6c2ca0'
    },
    {
      id: 3,
      git: '/bx-github.svg',
      title: 'Internship (BVI Simulation)',
      description: 'I designed and executed custom drone-combat simulations utilizing the LEONIDAS defense system and contributed to the construction of a physical tactical display to bridge digital simulations with physical operations.',
      bulletPoints: ['Script Code, Networking, Simulation'],
      image: 'BVI.png',
      color: '#205a05'
    },
    {
      id: 4,
      git: '/bx-github.svg',
      git_link: 'https://github.com/sgerda/PP4_WebSite_PinkFlamingo',
      title: 'Pink Flamingo',
      description: 'The Pink Flamingo web application is a movie search platform designed to help users find where they can stream, buy, or rent their favorite films. Developed independently, this project showcases my ability to handle all aspects of web development, from backend integration to frontend design. The application features a user-friendly interface and robust search functionality, making it a valuable tool for movie enthusiasts.',
      bulletPoints: ['JavaScript','CSS', 'HTML', 'Note', 'React.js'],
      image: '/pinkFlamingo.png',
      color: '#ca3c94'
    }
  ];
}
