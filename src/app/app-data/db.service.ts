import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {

  constructor(private httpClient: HttpClient) {}

  getUser() : Observable<HttpResponse<any>> {
    return this.httpClient.get<any>('https://randomuser.me/api/');
  }
}