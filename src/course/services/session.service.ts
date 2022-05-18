import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionRepositoryService} from "./session-repository.service";
import {Session} from "../interfaces/session";

@Injectable({
  providedIn: 'root'
})
export class SessionService implements SessionRepositoryService {

  constructor(
    private http: HttpClient
  ) { }

  sessionsByCourse(courseId: number): Observable<Session[]> {
    return this.http.get<Session[]>('sessions');
  }
}
