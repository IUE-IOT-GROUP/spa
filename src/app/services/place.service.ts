import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { env, Global } from '../global';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private placesUrl = `${env.apiUrl}/places`;

  constructor(private httpClient: HttpClient) { }

  getPlaces(): Observable<any> {
    return this.httpClient.get(this.placesUrl).pipe(
      catchError(Global.handleError)
    );
  }

  getPlace(place: Place): Observable<any> {
    return this.httpClient.get(`${this.placesUrl}/${place.id}`).pipe(
      catchError(Global.handleError)
    );
  }
}
