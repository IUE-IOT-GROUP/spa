import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { Place } from '../models/place';
import { PlaceService } from '../services/place.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.scss']
})

export class PlacesComponent implements OnInit {
    places: Place[] = [];
    currentTabId: number;

    constructor(private placeService: PlaceService) {
    }

    async ngOnInit(): Promise<void> {
        this.places = await this.getPlaces();
        this.changeTab(this.places[0].id);
    }

    async getPlaces(): Promise<Place[]> {
        return new Promise((resolve, reject) => {
            let _places = [];
            this.placeService.getPlaces().subscribe(
                (success) => {
                    success.data.forEach(item => {
                        let place = new Place();
                        place.id = item.id;
                        place.name = item.name;

                        _places.push(place);
                    });
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
}