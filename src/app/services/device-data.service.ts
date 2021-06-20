import {Injectable} from '@angular/core';
import {env, Global} from "../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeviceDataType} from "../models/device-data";
import {HttpResponse} from "../models/responses/http-response";
import {catchError, map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DeviceDataService {

    private deviceDataUrl = `${env.apiUrl}/devices/data`

    constructor(private http: HttpClient) {
    }

    getAllById(id: number): Observable<DeviceDataType[]> {
        return this.http.get<HttpResponse<DeviceDataType[]>>(`${this.deviceDataUrl}/${id}`).pipe(map(r => r.data), catchError(Global.handleError));
    }

    getDataByParameter(device_id: string, parameter_id: string, type: string): Observable<DeviceDataType> {
        return this.http.get<HttpResponse<DeviceDataType>>(`${this.deviceDataUrl}/${device_id}/${parameter_id}?period=${type}`).pipe(map(r => r.data), catchError(Global.handleError));
    }
}
