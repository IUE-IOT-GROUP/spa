import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumbs: string[] = [];

  constructor() { }

  add(title: string) {
    this.breadcrumbs.push(title);
  }

  get() {
    return this.breadcrumbs;
  }

  reset() {
    this.breadcrumbs = [];
  }
}
