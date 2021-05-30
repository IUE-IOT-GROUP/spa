import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { env, Global } from "../global";
import { Login } from '../models/login';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpError } from '../models/http-error';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = `${env.apiUrl}/login`;
  private _token: string;
  private _user: User = null;
  private _username: string = null;
  private _email: string = null;
  
  public get email(): string {
    return localStorage.getItem('email');
  }
  public set email(value: string) {
    localStorage.setItem('email', value);
  }

  public get username(): string {
    return localStorage.getItem('username');
  }
  public set username(value: string) {
    localStorage.setItem('username', value);
  }

  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }

  public get token(): string {
    return localStorage.getItem('token');
  }
  public set token(value: string) {
    localStorage.setItem('token', value);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  login(loginModel: Login): Observable<User> {
    return this.http.post<User>(this.loginUrl, loginModel, this.httpOptions)
      .pipe(
        catchError(Global.handleError)
      );
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
  }
}
