import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private _elementRef: ElementRef, private router: Router) {
    router.events.subscribe(() => {
      this.showSidebar = false;
    });
  }

  ngOnInit(): void {
  }

  onClick(event) {
    if (!this._elementRef.nativeElement.contains(event.target) && this.showSidebar === true) {
      this.toggleSidebar();
    }
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

}
