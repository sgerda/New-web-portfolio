import { CommonModule } from '@angular/common';
import { Component, Directive, ElementRef, Renderer2, 
  Inject, PLATFORM_ID, OnInit, OnDestroy, Input, 
  HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';



interface CardData {
  id: number;
  title: string; 
  description: string;
  image: string;
  color?: string;
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
  cards: CardData[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'First project description',
      image: 'assets/images/p1.jpg',
      color: '#ce3535'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Second project description',
      image: 'assets/images/p2.jpg',
      color: '#7e3db3'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Third project description',
      image: 'assets/images/p2.jpg',
      color: '#3ca2ca'
    }
  ];
}