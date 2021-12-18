import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import { Occupation } from '../Interface/occupation';
import { Ratings } from '../Interface/ratings';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OccupationAndRattingService {
  constructor(private httpClient: HttpClient) {}

  getOccupations(): Observable<any> {


    return this.httpClient
      .get(
        environment.AssessmentApiBaseUrl +
          environment.endPoints.quoate.getOccupation,
        { headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, observe: 'response' }
      )
      .pipe(
        map((resp) => {
          return resp.body;
        }),
        catchError((error) => throwError(error))
      );
  }

  getStates(): Observable<any> {
    return this.httpClient
      .get(
        environment.AssessmentApiBaseUrl +
          environment.endPoints.quoate.getStates,
        { headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } , observe: 'response' }
      )
      .pipe(
        map((resp) => {
          return resp.body;
        }),
        catchError((error) => throwError(error))
      );
  }
}
