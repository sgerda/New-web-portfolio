import { Routes } from '@angular/router';
import { ProjectsTab, ProjectsTabComponent } from "./projects-tab/projects-tab";

import { Home } from "./home/home";
import { About } from './about/about';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'projects-tab', component: ProjectsTabComponent},
    
];

// TODO: Fix the reload issue on about page. this crash the page