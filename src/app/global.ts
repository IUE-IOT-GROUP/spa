import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { HttpError } from "./models/http-error";
import { User } from "./models/user";

export const env = {
    apiUrl: "https://api.iot-ms.xyz/api"
}

export class Global {
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
}
