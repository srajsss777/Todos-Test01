import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { APIResponse } from '../../model/api/api-model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  configUrl = environment;

    constructor(private http: HttpClient) {
    }

    public post<T>(apiUrl: string, headers: HttpHeaders, params: HttpParams, body: T): Observable<APIResponse<T>> {
        return this.http.post<APIResponse<T>>(apiUrl, body, { headers, params }).pipe(catchError(this.handleErrors));
    }

    public get<T>(apiUrl: string, headers: HttpHeaders, params: HttpParams): Observable<APIResponse<T>> {
        return this.http.get<APIResponse<T>>(apiUrl, { headers, params }).pipe(catchError(this.handleErrors));
    }

    public put<T>(apiUrl: string, headers: HttpHeaders, params: HttpParams, body: T): Observable<APIResponse<T>> {
        return this.http.put<APIResponse<T>>(apiUrl, body, { headers, params }).pipe(catchError(this.handleErrors));
    }

    public delete<T>(apiUrl: string, headers: HttpHeaders, params: HttpParams, body: T): Observable<APIResponse<T>> {
        const options = { headers, params, body };
        return this.http.delete<APIResponse<T>>(apiUrl, options).pipe(catchError(this.handleErrors));
    }

    private handleErrors(error: HttpErrorResponse) {
        return throwError(error.error);
    }

    public contentTypeJsonHeader(): HttpHeaders {
        const header = new HttpHeaders().set('Content-Type', 'application/json');
        return header;
    }
}
