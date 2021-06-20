import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fog} from "../models/fog";
import {env, Global} from "../global";
import {catchError, map} from "rxjs/operators";
import {HttpResponse} from "../models/responses/http-response";
import {HttpError} from "../models/http-error";

@Injectable({
  providedIn: 'root'
})
export class FogService {
  private url = `${env.apiUrl}/fogs`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Fog[]> {
    return this.http.get<HttpResponse<Fog[]>>(this.url).pipe(map(d => d.data), catchError(Global.handleError));
  }

  getAllByPlace(id: string): Observable<Fog[]> {
    return this.http.get<HttpResponse<Fog[]>>(this.url).pipe(map(d => d.data), catchError(Global.handleError));
  }

  get(id: string): Observable<Fog> {
    return this.http.get<HttpResponse<Fog>>(`${this.url}/${id}`).pipe(map(d => d.data), catchError(Global.handleError));
  }

  add(fog: Fog): Observable<Fog | HttpError> {
    return this.http.post<HttpResponse<Fog>>(this.url, fog).pipe(map(d => d.data), catchError(Global.handleError));
  }

  delete(fog: Fog): Observable<any> {
    return this.http.delete(`${this.url}/${fog.id}`).pipe(map(d => d), catchError(Global.handleError));
  }
}
