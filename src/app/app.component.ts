import {Component, Injector} from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import {createCustomElement} from "@angular/elements";
import {ModalComponent} from "./custom/modal/modal.component";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet><router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'spa';

  constructor(faConfig: FaConfig, injector: Injector) {
    faConfig.fixedWidth = true;

    const ModalElement = createCustomElement(ModalComponent, {injector});
    customElements.define('modal-element', ModalElement);
  }
}
