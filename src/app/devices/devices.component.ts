import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  template: `
  <!DOCTYPE html>

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Devices - IOT Management System</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
      <link rel="stylesheet" href="/styles.css?v=1.07">
      <link rel="stylesheet" href="devices.css?=1.01">
  </head>
  
  <body>
      <div id="nav-links" class="aside-container">
          <div class="aside-title-container">
              <a routerLink="/home">IoT Management System</a>
          </div>
          <div class="aside-menu-container">
              <ul>
                  <li><a href="#"><i class="fas fa-user-friends fa-fw"></i><span>Users</span></a></li>
                  <li><a routerLink="/logs"><i class="fas fa-book-open fa-fw"></i><span>Logs</span></a></li>
                  <li><a href="#"><i class="fas fa-cog fa-fw"></i><span>Settings</span></a></li>
              </ul>
              <div class="aside-mobile-container">
                  <div class="mobile-item-container">
                      <ul>
                          <li><a href="index.html"><i class="fas fa-home fa-fw"></i><span>Home</span></a></li>
                          <li><a href="places.html"><i class="fas fa-map-marker fa-fw"></i><span>Places</span></a></li>
                          <li><a href="devices.html"><i class="fas fa-bug fa-fw"></i><span>Devices</span></a></li>
                          <li><a href="#"><i class="fas fa-user-friends fa-fw"></i><span>Users</span></a></li>
                          <li><a href="#"><i class="fas fa-book-open fa-fw"></i><span>Logs</span></a></li>
                          <li><a href="#"><i class="fas fa-cog fa-fw"></i><span>Settings</span></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div class="header-container">
          <div class="header-item-container">
              <ul>
                  <li><a href="" id="nav-item"><i class="fas fa-bars"></i></a></li>
                  <li><a routerLink="/home">Home</a></li>
                  <li><a routerLink="/places">Places</a></li>
                  <li><a routerLink="/devices">Devices</a></li>
              </ul>
          </div>
          <div class="header-user-container">
              <a href="#"><span id="user-message">Hi, </span><span id="user-name">Berkin</span><span
                      id="user-first-letter">B</span></a>
          </div>
      </div>
      <div class="subheader-container">
          <div class="subheader-item-container">
              <ul>
                  <li><a href="#">All</a></li>
                  <li><a href="#">Distance</a></li>
                  <li><a href="#">Heat Index</a></li>
                  <li><a href="#">Humidity</a></li>
                  <li><a href="#">Pressure</a></li>
                  <li><a href="#">Temperature</a></li>
              </ul>
          </div>
      </div>
      <div class="content-container">
          <div class="devices-container">
              <ul>
                  <li>
                      <div class="basic-card"></div>
                  </li>
                  <li>
                      <div class="basic-card"></div>
                  </li>
                  <li>
                      <div class="basic-card"></div>
                  </li>
                  <li>
                      <div class="basic-card"></div>
                  </li>
                  <li>
                      <div class="basic-card"></div>
                  </li>
                  <li>
                      <div class="basic-card"></div>
                  </li>
                  <li>
                      <div class="basic-card"></div>
                  </li>
              </ul>
          </div>
      </div>
  
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script>
          $('#nav-item').click(function (e) {
              $('#nav-links').addClass("show");
              return false;
          });
  
          $(document).on('click', function (e) {
              if ($(e.target).closest('.aside-container').length === 0) {
                  $('#nav-links.show').removeClass("show");
              }
          });
      </script>
  </body>
  `,
  styles: [
  ]
})
export class DevicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
