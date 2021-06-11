import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
})
export class SubheaderComponent implements OnInit {
  breadcrumbs: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.get();

  }

}
