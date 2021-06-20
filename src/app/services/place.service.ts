import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {env, Global} from '../global';
import {Place} from '../models/place';
import {HttpResponse} from "../models/responses/http-response";
import {Device} from "../models/device";
import {Fog} from "../models/fog";

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

    constructor(private http: HttpClient) {
    }

    getAll(parameters = {}): Observable<Place[]> {
        console.log(this.placesUrl);

        return this.http.get<HttpResponse<Place[]>>(this.placesUrl, {params: parameters})
            .pipe(map(r => r.data),
                catchError(Global.handleError)
            );
    }

    get(id: string): Observable<Place> {
        return this.http.get<HttpResponse<Place>>(`${this.placesUrl}/${id}`)
            .pipe(
                map(r => r.data),
                catchError(Global.handleError)
            )
    }

    getPlacesOfPlace(id: string): Observable<Place[]> {
        return this.http.get<HttpResponse<Place>>(`${this.placesUrl}/${id}`)
            .pipe(
                map(r => r.data.places),
                catchError(Global.handleError)
            );
    }

    add(place: Place): Observable<Place> {
        return this.http.post<HttpResponse<Place>>(`${this.placesUrl}`, place, this.httpOptions).pipe(
            map(r => r.data),
            catchError(Global.handleError)
        );
    }

    delete(place: Place): Observable<any> {
        return this.http.delete<Place>(`${this.placesUrl}/${place.id}`, this.httpOptions).pipe(
            catchError(Global.handleError)
        );
    }

    edit(place: Place) {
        let resp = this.http.put<Place>(`${this.placesUrl}/${place.id}`, place, this.httpOptions).pipe(
            catchError(Global.handleError)
        );

        return resp;
    }

    getDevices(id: string): Observable<Device[]> {
        return this.http.get<HttpResponse<Device[]>>(`${this.placesUrl}/${id}/devices`)
            .pipe(
                map(r => r.data),
                catchError(Global.handleError)
            );
    }

    getFogs(id: string): Observable<Fog[]> {
        return this.http.get<HttpResponse<Fog[]>>(`${this.placesUrl}/${id}/fogs`)
            .pipe(
                map(r => r.data),
                catchError(Global.handleError)
            );
    }

    getParents() {

    }
}
