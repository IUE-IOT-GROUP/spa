import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ModalService} from '../../custom/modal/modal.service';
import {Place} from '../../models/place';
import {BreadcrumbService} from '../../services/breadcrumb.service';
import {PlaceService} from '../../services/place.service';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
})

export class PlacesComponent implements OnInit, OnDestroy {
    places$: Observable<Place[]>;

    constructor(
        private placeService: PlaceService, private route: ActivatedRoute,
        private router: Router, private breadcrumbService: BreadcrumbService,
        private modalService: ModalService) {
        this.breadcrumbService.add('Places');
    }

    ngOnDestroy() {
        this.breadcrumbService.reset();
    }

    ngOnInit() {
        this.places$ = this.placeService.getAll({with: 'children'});
    }
}
