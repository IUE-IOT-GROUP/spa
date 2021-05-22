import { Component, OnInit } from '@angular/core';
import {AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }
model: any={};
login() {
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logOut() {
    localStorage.removeItem("token");
    }
  ngOnInit(): void {
  }

}
