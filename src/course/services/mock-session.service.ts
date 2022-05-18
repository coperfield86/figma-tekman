import { Injectable } from '@angular/core';
import {SessionRepositoryService} from "./session-repository.service";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Session} from "../interfaces/session";

@Injectable({
  providedIn: 'root'
})
export class MockSessionService implements SessionRepositoryService {

  constructor(
    private http: HttpClient
  ) { }

  sessionsByCourse(courseId: number): Observable<Session[]> {
    return this.http.get<Session[]>('assets/data/sessions.json');
  }
}
