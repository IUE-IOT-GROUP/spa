import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {env, Global} from "../global";
import {Login} from '../models/login';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    private _token: string;

    public get token(): string {
        return localStorage.getItem('token');
    }

    public set token(value: string) {
        localStorage.setItem('token', value);
    }

    private _user: User = null;

    public get user(): User {
        return this._user;
    }

    public set user(value: User) {
        this._user = value;
    }

    private _username: string = null;

    public get username(): string {
        return localStorage.getItem('username');
    }

    public set username(value: string) {
        localStorage.setItem('username', value);
    }

    private _email: string = null;

    public get email(): string {
        return localStorage.getItem('email');
    }

    public set email(value: string) {
        localStorage.setItem('email', value);
    }

    private _environment: string = null;

    get environment(): string {
        return localStorage.getItem('environment');
    }

    set environment(value: string) {
        localStorage.setItem('environment', value);
    }

    login(loginModel: Login): Observable<User> {
        let loginUrl = loginModel.environment == 'fog' ? env.fogUrl : env.cloudUrl;
        console.log(loginUrl);
        return this.http.post<User>(`${loginUrl}/login`, loginModel, this.httpOptions)
            .pipe(
                catchError(Global.handleError)
            );
    }

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("environment");
    }
}
