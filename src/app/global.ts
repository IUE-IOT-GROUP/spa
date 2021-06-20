import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {HttpError} from "./models/http-error";
import {Injectable} from "@angular/core";

export const location = localStorage.getItem('environment');
export const env = {
    apiUrl: location == 'fog' ? "https://ims.local/api" : "https://api.iot-ms.xyz/api",
    cloudUrl: "https://api.iot-ms.xyz/api",
    fogUrl: "https://ims.local/api"
}

@Injectable({
    providedIn: 'root'
})
export class Global {
    public environment;

    constructor() {
        this.environment = localStorage.getItem('environment');
    }

    public static handleError(error: HttpErrorResponse) {
        let errorModel: HttpError = new HttpError();
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            errorModel.message = error.error.message;
            errorModel.errors = [];

            let errors = Object.keys(error.error.errors);

            errors.forEach((element: any) => {
                error.error.errors[element].forEach(item => {
                    errorModel.errors.push(item);
                });
            });
        }

        return throwError(errorModel);
    }

    isFog() {
        return this.environment == 'fog';
    }
}
