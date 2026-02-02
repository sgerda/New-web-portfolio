import { Component } from '@angular/core';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { NgxTimelineComponent, NgxTimelineEntryComponent } from '@omnedia/ngx-timeline';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { CommonModule } from '@angular/common';

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

}
