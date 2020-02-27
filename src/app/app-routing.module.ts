import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: {animation: 'about'}
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {animation: 'projects'}
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: {animation: 'skills'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {animation: 'contact'}
  },
  {
    path: '**',
    data: {animation: 'home'},
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
