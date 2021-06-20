import {Component, Input, OnInit} from '@angular/core';
import {Device} from "../../../models/device";

@Component({
  selector: 'device-info',
  templateUrl: './device-info.component.html'
})
export class DeviceInfoComponent implements OnInit {
  @Input() device: Device;
  constructor() { }

  ngOnInit(): void {
  }

}
