import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-top-bar',
  imports: [MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {

}
