import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
})
export class FormGroupComponent implements OnInit {
  @Input() label: string;
  @Input() for: string;

  constructor() { }

  ngOnInit(): void {
  }

}
