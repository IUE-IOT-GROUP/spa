import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { env, Global } from '../global';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private placesUrl = `${env.apiUrl}/places`;

  constructor(private http: HttpClient) { }

  getPlaces(selectedId: string): Observable<any> {
    return this.http.get(`${this.placesUrl + '/' + (selectedId ?? '')}`).pipe(
      catchError(Global.handleError)
    );
  }

  getPlace(place: Place): Observable<any> {
    return this.http.get(`${this.placesUrl}/${place.id}`).pipe(
      catchError(Global.handleError)
    );
  }

  addPlace(place: Place): Observable<Place> {
    return this.http.post<Place>(`${this.placesUrl}`, place, this.httpOptions).pipe(
      catchError(Global.handleError)
    );
  }
}
