import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from 'src/app/services/login.service';
import {Global} from "../../global";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    host: {
        '(document:click)': 'onClick($event)'
    }
})
export class HeaderComponent implements OnInit {
    @Output()
    public onSidebarToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

    showSidebar: boolean = false;
    showUserbar: boolean = false;
    enableDark: boolean = false;
    themePreference: string = 'light';
    username: string;
    email: string;

    constructor(private _elementRef: ElementRef, private router: Router, private loginService: LoginService, public global: Global) {
        router.events.subscribe(() => {
            this.showSidebar = false;
        });

        this.themePreference = localStorage.getItem("themePreference") ?? 'light';
        this.enableDark = this.themePreference != 'light';

        if (this.enableDark)
            document.documentElement.classList.add('dark');
    }

    ngOnInit(): void {

        this.username = this.loginService.username;
        this.email = this.loginService.email;
    }

    switchTheme(): void {
        this.enableDark = !this.enableDark;
        localStorage.setItem('themePreference', this.enableDark ? 'dark' : 'light');

        document.documentElement.classList.toggle('dark');
    }

    onClick(event) {
        if (!this._elementRef.nativeElement.contains(event.target) && this.showSidebar === true) {
            this.toggleSidebar();
        }
        if (!this._elementRef.nativeElement.contains(event.target) && this.showUserbar === true) {
            this.toggleUserBar();
        }
    }

    toggleSidebar(): void {
        this.showSidebar = !this.showSidebar;
        this.onSidebarToggle.emit(this.showSidebar);
    }

    toggleUserBar(): void {
        this.showUserbar = !this.showUserbar
    };

    logout() {
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}
