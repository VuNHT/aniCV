import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { SkillComponent } from './home/skill/skill.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { InterestComponent } from './home/interest/interest.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'education',
    component: TimelineComponent
  },
  {
    path: 'skills',
    component: SkillComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'interest',
    component: InterestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
