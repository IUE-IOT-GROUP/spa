import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
})
export class AsideComponent implements OnInit {

  @Input()
  sidebarToggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
