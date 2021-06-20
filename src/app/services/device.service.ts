import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {env, Global} from "../global";
import {Observable} from "rxjs";
import {Device} from "../models/device";
import {catchError, map} from "rxjs/operators";
import {HttpResponse} from "../models/responses/http-response";

@Injectable({
    providedIn: 'root'
})
export class DeviceService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private devicesUrl = `${env.apiUrl}/devices`;

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Device[]> {
        return this.http.get<HttpResponse<Device[]>>(this.devicesUrl, this.httpOptions).pipe(map(r => {
            r.data.forEach((d) => {
                d.parameters.forEach((p) => {
                    p.expected_parameter = Object.keys(p)[0];
                    p.name = p[Object.keys(p)[0]].name;
                    p.unit = p[Object.keys(p)[0]].unit;

                    delete p[Object.keys(p)[0]];
                })
            });

            return r.data;
        }), catchError(Global.handleError));
    }

    getById(id: string): Observable<Device> {
        return this.http.get<HttpResponse<Device>>(`${this.devicesUrl}/${id}`, this.httpOptions).pipe(map(r => {
            r.data.parameters.map((response) => {
                return response;
            })
            return r.data;
        }), catchError(Global.handleError))
    }

    add(device: Device): Observable<Device> {
        return this.http.post<HttpResponse<Device>>(this.devicesUrl, device, this.httpOptions).pipe(
            map(d => d.data),
            catchError(Global.handleError)
        );
    }
}
