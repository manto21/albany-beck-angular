import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AppData } from './app-data.interface';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  selectedRegion = new Subject<any>();
  selectedCountry = new Subject<any>();

  constructor(private httpClient: HttpClient) {}

  getCountries(region: any): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>('https://restcountries.com/v2/region/' + region);
  }
}