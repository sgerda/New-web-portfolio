import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { SideBar } from "./side-bar/side-bar";
import { TopBar } from './top-bar/top-bar';
import { Routes } from '@angular/router';
import bootstrap from '../main.server';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProjectsTab, ProjectsTabComponent } from './projects-tab/projects-tab';
import { routes } from './app.routes';
import { About } from './about/about';


// bootstrapApplication(Component, { providers: [provideRouter(
//     routes
// )] })


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, SideBar, TopBar], 
    templateUrl: './app.html',
    styleUrl: './app.css'
})


export class App { }