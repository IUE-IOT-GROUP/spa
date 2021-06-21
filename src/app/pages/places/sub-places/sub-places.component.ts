import {Component, OnDestroy, OnInit} from '@angular/core';
import {Place} from "../../../models/place";
import {Observable} from "rxjs";
import {Device} from "../../../models/device";
import {Fog} from "../../../models/fog";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PlaceService} from "../../../services/place.service";
import {BreadcrumbService} from "../../../services/breadcrumb.service";
import {ModalService} from "../../../custom/modal/modal.service";

@Component({
    selector: 'app-sub-places',
    templateUrl: './sub-places.component.html',
})
export class SubPlacesComponent implements OnInit, OnDestroy {
    place: Place;
    places$: Observable<Place[]>;
    devices$: Observable<Device[]>;
    fogs$: Observable<Fog[]>;
    params: Params;

    currentTab;

    constructor(
        private placeService: PlaceService, private route: ActivatedRoute,
        private router: Router, private breadcrumbService: BreadcrumbService,
        private modalService: ModalService) {
        this.breadcrumbService.add('Places');
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;

        this.currentTab = 'places';
    }

    ngOnDestroy() {
        this.breadcrumbService.reset();
    }

    changeTab(tab) {
        this.currentTab = tab;
    }

    ngOnInit() {
        this.route.params.subscribe((r) => this.params = r);

        this.placeService.get(this.params.id).subscribe(d => this.place = d);
        this.places$ = this.placeService.getPlacesOfPlace(this.params.id);
        this.devices$ = this.placeService.getDevices(this.params.id);
        this.fogs$ = this.placeService.getFogs(this.params.id);
    }

    onEdit(place: Place) {
        this.placeService.edit(place).subscribe(() => location.reload());
    }

    openEditModal(title, content, buttons) {
        this.modalService.show(title, content, buttons);
    }
}
