import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from "../../../services/device.service";
import {ModalService} from "../../../custom/modal/modal.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Device} from "../../../models/device";

@Component({
  selector: 'devices-device-cards',
  templateUrl: './device-cards.component.html'
})
export class DeviceCardsComponent implements OnInit {
  @Input() devices;

  newDevice: Device;
  addDeviceForm = new FormGroup({
    name: new FormControl(''),
    parent_name: new FormControl(null),
    parent: new FormControl(null)
  });
  constructor(private modalService: ModalService, private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  openAddModal(title, content, buttons) {
    this.modalService.show(title, content, buttons);
  }

  onSubmit() {
    this.newDevice = this.addDeviceForm.value;

    this.deviceService.add(this.newDevice).subscribe(() => location.reload());

    this.newDevice = null;
  }

}
