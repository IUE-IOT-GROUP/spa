import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class HeaderComponent implements OnInit {
  showSidebar: boolean = false;
  enableDark: boolean = false;
  themePreference: string = 'light';
  username: string;

  constructor(private _elementRef: ElementRef, private router: Router, private loginService: LoginService) {
    router.events.subscribe(() => {
      this.showSidebar = false;
    });

    this.themePreference = localStorage.getItem("themePreference") ?? 'light';
    this.enableDark = this.themePreference != 'light';

    if (this.enableDark)
      document.body.classList.add('dark');
  }

  ngOnInit(): void {

    this.username = this.loginService.username;
  }

  switchTheme(): void {
    this.enableDark = !this.enableDark;
    localStorage.setItem('themePreference', this.enableDark ? 'dark' : 'light');

    document.body.classList.toggle('dark');
  }

  onClick(event) {
    if (!this._elementRef.nativeElement.contains(event.target) && this.showSidebar === true) {
      this.toggleSidebar();
    }
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
