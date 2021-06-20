import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../../models/place";
import {PlaceService} from "../../../services/place.service";
import {ModalService} from "../../../custom/modal/modal.service";

@Component({
    selector: 'place-card',
    templateUrl: './place-card.component.html',
})
export class PlaceCardComponent implements OnInit {
    @Input() place: Place;
    editing: boolean = false;

    constructor(private placeService: PlaceService, public modalService: ModalService) {
    }

    ngOnInit(): void {
    }

    onConfirmDelete() {
        this.placeService.delete(this.place).subscribe(() => location.reload());
    }

    edit() {
        this.editing = !this.editing;
    }

    save() {
        this.editing = false;

        this.placeService.edit(this.place).subscribe();
    }

    removePlace(title, content, buttons) {
        this.modalService.show(title, content, buttons);
    }
}
