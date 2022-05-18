import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseComponent} from "./components/course/course.component";
import {CourseSessionsComponent} from "./components/course-sessions/course-sessions.component";
import {IntroductionComponent} from "../app/components/introduction/introduction.component";

const routes: Routes = [
  {
    path: '',
    component: CourseComponent
  },
  {
    path: 'sessions/:trimester',
    component: CourseSessionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
