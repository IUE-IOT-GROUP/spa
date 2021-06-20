import {Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class DropdownComponent implements OnInit {
  open: boolean = false;
  @Input() icon = faPlus;

  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  onClick(event) {
    if (!this._elementRef.nativeElement.contains(event.target) && this.open === true) {
      this.toggle();
    }
  }

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

}
