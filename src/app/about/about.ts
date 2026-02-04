import { Component } from '@angular/core';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { NgxTimelineComponent, NgxTimelineEntryComponent } from '@omnedia/ngx-timeline';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { CommonModule } from '@angular/common';


interface TimelineEntry {
  year?: string;
  description?: string;
  subheader?: string;
  bulletPoints?: string[];
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

  infoEntries: TimelineEntry[] = this.getInformationEntries();

  private getInformationEntries(){

    const infoEntries: TimelineEntry[] = [
      {
        year: '2010',
        description: 'In 2010, My family decided to moved to the United States from Dominican Republic. This was a big change for me as I had to adapt to a new culture and language.',
        
      },
      {
        year: '2011',
        description:' In 2011, I graduated from high school and decided to focus on working I took on various jobs to support myself and my family.'
      },
      {
        year: '2015',
        description: "I decided to go to college to persue a degree in Architecture, since art and design have always been a passion of mine."
      },
      { 
        //This is a subheader entry
        subheader: 'Military Service',
      },
      {
        year: '2017',
        description: 'In 2017, I made the decision to join the US Air Force. This was a significant turning point in my life, as it provided me with discipline, structure, and a sense of purpose.',
        bulletPoints: ['Time Management', 'Leadership', 'Technical Skills']
      },
      {
        year: '2018',
        description: 'I graduated from basic training and technical school, and was assigned to my first duty station. 19th Airlift Wing, Little Rock AFB, AR as a ground transportation.',
        bulletPoints:['Motor Vehicle Specialist', 'Logistics Coordination', 'Team Collaboration', 'Transportation Logistics']
      },
      {
        year: '2019',
        description: 'I was deployed to the Middle East, where I gained valuable experience in a high-pressure environment. I was responsible for coordinating transportation and logistics for military personnel and equipment. This experience was both challenging and rewarding, as I had to adapt to new environments and work with different people from different cultures.',
        bulletPoints: ['Adaptability', 'Cultural Awareness', 'Problem-Solving']
      },
      {
        year: '2021',
        description: 'I separated from the Air Force after completing my service commitment. This transition marked the beginning of a new chapter in my life, where I decided to complete my education and complete my Associate degree in General Studies. At Valencia College.',
        bulletPoints: ['Acaademic Excellence', 'Time Management', 'Goal Setting']
      },
      {
        // This is a subheader entry
        subheader: 'Education Path'
      },
      {
        year: '2023 2024',
        description: " I enrolled at Full Sail University to pursue a Bachelor's degree in Computer Science. This decision was driven by my passion for technology and my desire to develop innovative solutions.",
        bulletPoints: ['Salutatorian', 'Web Development', 'AI & Machine Learning', 'Problem Solving','Software Engineering']

      },
      {
        year: '2025',
        description: 'In January 2025 I decided to continue my education further by enrolling in a Master\'s program in Computer Science at Full Sail University. Thanks to their fast-track program, I graduated at the end of 2025 with my master degree. During the program I focused my thesis and research on Intrusion Detection Systems (IDS) and Machine Learning, exploring how these technologies can enhance cybersecurity measures.',
        bulletPoints: ['Valedictorian', 'Course Director Award','Research', 'Machine Learning', 'Cybersecurity', 'Intrusion Detection Systems']
      },
      {
        year: 'Present',
        description: 'Currently, I am searching for opportunities in the field of software development and AI. I am eager to apply my skills and knowledge to real-world projects and contribute to innovative solutions that can make a positive impact.',
      }

    ];

    return infoEntries;
  }
}


