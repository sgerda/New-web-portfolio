import { Routes } from '@angular/router';
import { ProjectsTab, ProjectsTabComponent } from "./projects-tab/projects-tab";

import { Home } from "./home/home";
import { About } from './about/about';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'projects-tab', component: ProjectsTabComponent},
    {path: 'about', component: About}
];

