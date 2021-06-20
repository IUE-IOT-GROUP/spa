import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ModalService} from "../../custom/modal/modal.service";
import {DeviceService} from "../../services/device.service";
import {DeviceDataService} from "../../services/device-data.service";
import {Observable} from "rxjs";
import {Device} from "../../models/device";
import {DeviceData, DeviceDataType} from "../../models/device-data";

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html'
})
export class DeviceComponent implements OnInit {
    id: string;
    device$: Observable<Device>;
    deviceData$: Observable<DeviceDataType[]>;
    params: Params;

    constructor(private route: ActivatedRoute, private router: Router,
                private modalService: ModalService, private deviceService: DeviceService,
                private deviceDataService: DeviceDataService) {
    }

    ngOnInit() {
        this.route.params.subscribe((r) => this.params = r);

        this.device$ = this.deviceService.getById(this.params.id);

        this.device$.subscribe((d) => {

            return d;
        });

        this.deviceData$ = this.deviceDataService.getAllById(this.params.id);
    }

}
