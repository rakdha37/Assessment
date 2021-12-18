import { Injectable } from '@angular/core';
import { CalcuateParams } from '../Interface/calcuateParams';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class CalculationService {

  constructor(private httpClient: HttpClient) {}

  getRatingByOccupations(calculateParams: CalcuateParams): any {

    const headers = new HttpHeaders()
    .append('Access-Control-Allow-Origin', '*');

    return this.httpClient.post(environment.AssessmentApiBaseUrl + environment.endPoints.quoate.calculateTotal,
      calculateParams,
      { headers:headers, observe: "response" })
      .pipe(map(resp => {
        return resp.body;
      })
      );
  }
}
