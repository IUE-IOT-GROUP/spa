import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ModalService } from '../custom/modal/modal.service';
import { Device } from '../models/device';
import { Place } from '../models/place';
import { BreadcrumbService } from '../services/breadcrumb.service';
import { PlaceService } from '../services/place.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
})

export class PlacesComponent implements OnInit {
    place: Place;
    places: Place[] = [];
    newPlace: Place;
    selectedPlace: Place;

    devices: Device[] = [];

    selectedId: string;
    currentTabId: number;

    params: Subscription;

    addPlaceForm = new FormGroup({
        name: new FormControl(''),
        parent_name: new FormControl(null),
        parent: new FormControl(null)
    });

    constructor(
        private placeService: PlaceService,
        private modalService: ModalService, private route: ActivatedRoute, private router: Router, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.add('Places');
    }

    async ngOnInit(): Promise<void> {

        this.params = this.route.params.subscribe(async params => {
            this.selectedId = params['id'];
            if (this.selectedId) {
                let obj = await this.getPlaces(this.selectedId).then((d) => {
                    console.log(48, d);
                    return { places: d.places, devices: d.devices };
                });

                this.places = obj.places;
                this.devices = obj.devices;
                this.breadcrumbService.add(this.place.name);

                console.log(53, this.devices);

                this.addPlaceForm.patchValue({ parent_name: this.place.name, parent: this.place.id });
            }
            else {
                this.places = await this.getPlaces(null).then((d) => {
                    console.log(59, d);
                    return d.places;
                });
            }
        });

        //this.places = await this.getPlaces(this.selectedId);
    }

    ngOnDestroy() {
        this.params.unsubscribe();
        this.breadcrumbService.reset();
    }

    loadPlaces(places): Place[] {
        console.log(places);
        let _places: Place[] = [];
        if (places.length > 0) {
            places.forEach(item => {
                let place = new Place();
                place.id = item.id;
                place.name = item.name;
                place.places = item.places != null ? this.loadPlaces(item.places) : null;
                place.devices = item.devices != null ? this.loadDevices(item.devices) : null;
                _places.push(place);
            });
        }

        return _places;
    }

    loadDevices(devices): Device[] {
        let _devices: Device[] = [];
        if (devices.length > 0) {
            devices.forEach(item => {
                let device = new Device();
                device.id = item.id;
                device.name = item.name;
                _devices.push(device);
            });
        }

        return _devices;
    }

    async getPlaces(selectedId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let _places: Place[] = [];
            let _devices: Device[] = [];

            this.placeService.getPlaces(selectedId).subscribe(
                (success) => {
                    if (success.data.id) {
                        let item = success.data;

                        _devices = this.loadDevices(item.devices);
                        _places = this.loadPlaces(item.places);

                        this.place = new Place();
                        this.place.id = item.id;
                        this.place.name = item.name;
                        this.place.places = _places;
                        this.place.devices = _devices;
                    }
                    else {
                        success.data.forEach(item => {
                            let _devices: Device[] = [];
                            if (item.devices.length > 0) {
                                item.devices.forEach(d => {
                                    let device = new Device();
                                    device.id = d.id;
                                    device.name = d.name;

                                    _devices.push(device);
                                });
                            }

                            let _children: Place[] = [];
                            if (item.places.length > 0) {
                                item.places.forEach(subItem => {
                                    let place = new Place();
                                    place.id = subItem.id;
                                    place.name = subItem.name;

                                    _children.push(place);
                                });
                            }

                            let place = new Place();
                            place.id = item.id;
                            place.name = item.name;
                            place.places = _children;
                            place.devices = _devices;

                            _places.push(place);
                        });
                    }
                    resolve({ places: _places, devices: _devices });
                },
                (error) => {
                    reject(error)
                }
            );
        });
    }

    onConfirmDelete() {
        this.placeService.deletePlace(this.selectedPlace).subscribe(() => location.reload());
    }

    removePlace(place: Place) {
        this.selectedPlace = place;
        this.modalService.toggle("removePlaceConfirmationModal");
    }

    changeTab(id) {
        this.currentTabId = id;
    }

    counter(i) {
        return new Array(i);
    }

    openAddModal() {
        this.modalService.toggle("addPlaceModal");
    }

    onSubmit() {
        this.newPlace = this.addPlaceForm.value;

        this.placeService.addPlace(this.newPlace).subscribe(() => location.reload());

        this.newPlace = null;
    }

    goToPlace(id) {
        this.router.navigate(['/dashboard/places', { id: id }]);
    }
}