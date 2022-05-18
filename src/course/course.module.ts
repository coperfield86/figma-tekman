import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { CourseSessionsComponent } from './components/course-sessions/course-sessions.component';
import {CourseRoutingModule} from "./course-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {SharedModule} from "../shared/shared.module";
import { IntroductionComponent } from '../app/components/introduction/introduction.component';
import {SessionRepositoryService} from "./services/session-repository.service";
import {MockSessionService} from "./services/mock-session.service";

const test = [
  { provide: SessionRepositoryService, useClass: MockSessionService }
];

@NgModule({
  declarations: [
    CourseComponent,
    CourseSessionsComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FlexModule,
    SharedModule
  ],
  providers: [
    ...test
  ]
})
export class CourseModule { }
