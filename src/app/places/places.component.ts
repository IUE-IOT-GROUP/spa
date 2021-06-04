import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ModalService } from '../custom/modal/modal.service';
import { Place } from '../models/place';
import { BreadcrumbService } from '../services/breadcrumb.service';
import { PlaceService } from '../services/place.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
})

export class PlacesComponent implements OnInit {
    places: Place[] = [];
    subPlaces: Place[] = [];
    place: Place;
    selectedId: string;
    currentTabId: number;
    params: Subscription;

    addPlaceForm = new FormGroup({
        name: new FormControl(''),
        parent: new FormControl(null)
    });

    newPlace: Place;

    constructor(
        private placeService: PlaceService,
        private modalService: ModalService, private route: ActivatedRoute, private router: Router, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.add('Places');
    }

    async ngOnInit(): Promise<void> {

        this.params = this.route.params.subscribe(async params => {
            this.selectedId = params['id'];
            if (this.selectedId) {
                this.places = await this.getPlaces(this.selectedId);
            }
            else {
                this.places = await this.getPlaces(null);
            }
        });

        //this.places = await this.getPlaces(this.selectedId);
    }

    ngOnDestroy() {
        this.params.unsubscribe();
    }

    async getPlaces(selectedId: string): Promise<Place[]> {
        return new Promise((resolve, reject) => {
            let _places = [];
            this.placeService.getPlaces(selectedId).subscribe(
                (success) => {
                    if (success.data.id) {
                        let item = success.data;

                        if (item.places.length > 0) {
                            item.places.forEach(subItem => {
                                let place = new Place();
                                place.id = subItem.id;
                                place.name = subItem.name;

                                _places.push(place);
                            });
                        }

                        this.place = new Place();
                        this.place.id = item.id;
                        this.place.name = item.name;
                        this.place.places = _places;
                        this.breadcrumbService.add(item.name);
                        console.log(this.breadcrumbService.get());
                    }
                    else {
                        success.data.forEach(item => {
                            let place = new Place();
                            place.id = item.id;
                            place.name = item.name;
                            place.places = null;

                            _places.push(place);
                        });
                    }
                    resolve(_places);
                },
                (error) => {
                    reject(error)
                }
            );
        });
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

        this.placeService.addPlace(this.newPlace).subscribe((d) => {
            location.reload();
        });

        this.newPlace = null;
    }

    goToPlace(id) {
        this.router.navigate(['/dashboard/places', { id: id }]);
    }
}