import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpError } from '../models/http-error';
import { Login } from '../models/login';
import { User } from '../models/user';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  error: HttpError;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    let loginModel = new Login(this.email, this.password);

    this.loginService.login(loginModel).subscribe(
      (success) => {
        let user = new User();
        this.loginService.token = success.token;
        this.loginService.username = success.username;

        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.error = error;
      }
    );
  }

}
