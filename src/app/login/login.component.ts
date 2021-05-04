import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <!DOCTYPE html>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Screen - IOT Management System</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="login.css">
  </head>
  
  <body>
    <div class="container">
      <div class="login-container">
        <div class="login-title-container">
          <h1>IoT Management System</h1>
        </div>
        <div class="login-information-container">
          <h2>Sign In To Admin</h2>
          <span>Enter your details to login to your account</span>
        </div>
        <form>
          <div class="form-username-container">
            <input class="form-control" type="text" placeholder="Username" name="username" autocomplete="off"
              required>
          </div>
          <div class="form-password-container">
            <input class="form-control" type="password" placeholder="Passsword" name="password"
              autocomplete="off" required>
          </div>
          <div class="form-other-container">
            <label class="checkbox-container" for="remember">
              <input type="checkbox" name="remember" id="remember">
              <span></span>Remember me
            </label>
            <a href="#">Forget Password ?</a>
          </div>
          <div class="sign-container">
            <button><a routerLink="/home">Sign In</a></button>
          </div>
        </form>
      </div>
    </div>
  
    <script type="text/javascript" src="login.js"></script>
  </body>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}