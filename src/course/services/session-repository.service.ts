import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Session} from "../interfaces/session";

export abstract class SessionRepositoryService {
  public abstract sessionsByCourse(courseId: number): Observable<Session[]>;
}
