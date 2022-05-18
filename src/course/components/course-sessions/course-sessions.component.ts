import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SessionRepositoryService} from "../../services/session-repository.service";

@Component({
  selector: 'app-course-sessions',
  templateUrl: './course-sessions.component.html',
  styleUrls: ['./course-sessions.component.scss']
})
export class CourseSessionsComponent implements OnInit {

  sessions: any[] = [];
  countViewedSessions = 0;

  constructor(
    private router: Router,
    private sessionService: SessionRepositoryService
  ) { }

  ngOnInit(): void {
    this.sessionService.sessionsByCourse(1).subscribe(sessions => {
      this.sessions = sessions;
      this.countViewedSessions = this.sessions.filter(session => session.status === 1).length;
    });
  }

  trackByFn(id: number): number {
    return id;
  }

  goToIntroduction(): void {
    this.router.navigateByUrl(`/introduction`).then();
  }
}
