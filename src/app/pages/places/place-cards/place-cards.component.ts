import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../../custom/modal/modal.service";
import {Place} from "../../../models/place";
import {FormControl, FormGroup} from "@angular/forms";
import {PlaceService} from "../../../services/place.service";
import {ActivatedRoute} from "@angular/router";
import {HttpError} from "../../../models/http-error";
import {ToastrService} from "ngx-toastr";
import {Global} from "../../../global";

@Component({
    selector: 'places-place-cards',
    templateUrl: './place-cards.component.html'
})
export class PlaceCardsComponent implements OnInit {
    @Input() places: Place[];
    @Input() place: Place;

    newPlace: Place;
    addPlaceForm = new FormGroup({
        name: new FormControl(''),
        parent_name: new FormControl(null),
        parent_id: new FormControl(null)
    });
    current: string;
    addModal;

    constructor(public modalService: ModalService, private placeService: PlaceService,
                private route: ActivatedRoute, private toastr: ToastrService, public global: Global) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((r) => this.current = r.id);

        if (this.place) {
            this.addPlaceForm.patchValue({parent_name: this.place.name, parent_id: this.place.id});
        }
    }

    openAddModal(title, content, buttons) {
        this.addModal = this.modalService.show(title, content, buttons);
    }

    onSubmit() {
        this.newPlace = this.addPlaceForm.value;

        this.placeService.add(this.newPlace).subscribe((place: Place) => {
            this.places.push(place);
            this.toastr.success('Success!');
            this.modalService.close();
        }, (errors: HttpError) => {
            this.addModal.errors = errors.errors;
        });

        this.newPlace = null;
    }
}
