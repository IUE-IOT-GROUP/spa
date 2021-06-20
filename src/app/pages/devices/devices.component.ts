import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../services/device.service";

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
})

export class DevicesComponent implements OnInit {
    devices$;

    constructor(private deviceService: DeviceService) {
        // this.currentTabId = this.tabs[0].id;
    }

    ngOnInit(): void {
        this.devices$ = this.deviceService.getAll();
    }

    /*changeTab(id) {
        this.currentTabId = id;
    }

    counter(i) {
        return new Array(i);
    }*/
}
