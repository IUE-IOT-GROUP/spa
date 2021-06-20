import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../../models/place";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Device} from "../../../models/device";
import {ModalService} from "../../../custom/modal/modal.service";
import {DeviceService} from "../../../services/device.service";
import {ToastrService} from "ngx-toastr";
import {PlaceService} from "../../../services/place.service";
import {Fog} from "../../../models/fog";
import {Global} from "../../../global";

@Component({
    selector: 'places-device-cards',
    templateUrl: './device-cards.component.html'
})
export class DeviceCardsComponent implements OnInit {
    @Input() devices;
    @Input() place;

    newDevice: Device;

    addDeviceForm = this.fb.group({
        name: [''],
        parent_place: [''],
        fog_id: [''],
        place_name: [''],
        place_id: [''],

        mac_address: [''],
        ip_address: [''],

        parameters: this.fb.array([])
    });

    places: Place[] = [];
    fogs: Fog[] = [];

    modal;

    constructor(private modalService: ModalService, private deviceService: DeviceService, private fb: FormBuilder,
                private toastr: ToastrService, private placeService: PlaceService, public global: Global) {
    }

    get parameters(): FormArray {
        return this.addDeviceForm.get('parameters') as FormArray;
    }

    ngOnInit(): void {
        this.addDeviceForm.patchValue({place_name: this.place.name, place_id: this.place.id});
        this.placeService.getAll().subscribe(d => this.places = d);

        this.addDeviceForm.get('parent_place').valueChanges.subscribe(value => {
            console.log(value);
            this.placeService.getFogs(value).subscribe(d => {
                this.fogs = d;
                this.modal.errors = [];
            });
        });
    }

    openAddModal(title, content, buttons) {
        this.modal = this.modalService.show(title, content, buttons);
    }

    newParameter(): FormGroup {
        return this.fb.group({
            expected_parameter: [''],
            name: [''],
            unit: [''],
        })
    }

    addParameter() {
        console.log(this.parameters);
        this.parameters.push(this.newParameter());
        // ugly, but only way to update modal content
        this.modal.errors = [];
    }

    onSubmit() {
        this.newDevice = this.addDeviceForm.value;
        console.log(this.newDevice);

        this.deviceService.add(this.newDevice).subscribe((device: Device) => {
            this.devices.push(device);
            this.toastr.success('Success');
            this.modalService.close();
        }, error => this.modal.errors = error.errors);

        this.newDevice = null;
    }
}
