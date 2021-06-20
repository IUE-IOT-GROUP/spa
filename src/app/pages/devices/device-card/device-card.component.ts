import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from "../../../services/device.service";
import {Device} from "../../../models/device";
import {PlaceService} from "../../../services/place.service";
import {ModalService} from "../../../custom/modal/modal.service";

@Component({
    selector: 'device-card',
    templateUrl: './device-card.component.html'
})
export class DeviceCardComponent implements OnInit {
    @Input() device: Device;
    editing: boolean = false;

    constructor(private deviceService: DeviceService, private modalService: ModalService) {
    }

    ngOnInit(): void {
    }

    onConfirmDelete() {
        // this.deviceService.deletePlace(this.place).subscribe(() => location.reload());
    }

    edit() {
        this.editing = true;
    }

    save() {
        this.editing = false;

        // this.placeService.editPlace(this.place).subscribe();
    }

    removeDevice(title, content, buttons) {
        // this.modalService.show(title, content, buttons);
    }
}
