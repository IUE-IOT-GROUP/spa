import { Component } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet><router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'spa';

  constructor(faConfig: FaConfig) {
    faConfig.fixedWidth = true;
  }
}
