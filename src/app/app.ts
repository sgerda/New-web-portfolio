import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from "./side-bar/side-bar";
import { TopBar } from './top-bar/top-bar';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SideBar, TopBar], 
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App { }