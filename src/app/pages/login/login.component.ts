import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpError } from '../../models/http-error';
import { Login } from '../../models/login';
import { User } from '../../models/user';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  environment: boolean = false;
  error: HttpError;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.environment);
    let e = 'fog';

    if (this.environment) {
      e = 'cloud';
    }

    let loginModel = new Login(this.email, this.password, e);

    this.loginService.login(loginModel).subscribe(
      (success) => {
        let user = new User();
        this.loginService.token = success.token;
        this.loginService.username = success.username;
        this.loginService.email = success.email;
        this.loginService.environment = e;

        window.location.href = '/dashboard';
      },
      (error) => {
        this.error = error;
      }
    );
  }

}
