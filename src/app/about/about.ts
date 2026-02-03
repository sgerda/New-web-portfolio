import { Component } from '@angular/core';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { NgxTimelineComponent, NgxTimelineEntryComponent } from '@omnedia/ngx-timeline';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { CommonModule } from '@angular/common';


interface TimelineEntry {
  year: string;
  description: string;
  subheader?: string;
  bulletPoints?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgxBorderBeamComponent, 
    NgxTimelineComponent, 
    NgxTimelineEntryComponent,
    NgxNeonUnderlineComponent, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  // NOTE: Complete refactoring the timeline component to support sub-headers
  infoEntries: TimelineEntry[] = [
    {
      year: '2010',
      description: 'In 2010, My family decided to moved to the United States from Dominican Republic. This was a big change for me as I had to adapt to a new culture and language.',
      bulletPoints: ''
    }
  ];

}
