import { Routes } from '@angular/router';
import { ProjectsTab } from "./projects-tab/projects-tab";
import { TopBar } from "./top-bar/top-bar";
import { SideBar } from "./side-bar/side-bar";
import { Home } from "./home/home";

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'top-bar', component: TopBar},
    {path: 'side-bar', component: SideBar},
    {path: 'projects-tab', component: ProjectsTab}
];
