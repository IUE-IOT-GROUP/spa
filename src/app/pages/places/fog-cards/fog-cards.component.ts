import {ApplicationRef, ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';
import {Fog} from "../../../models/fog";
import {Place} from "../../../models/place";
import {FormControl, FormGroup} from "@angular/forms";
import {ModalService} from "../../../custom/modal/modal.service";
import {FogService} from "../../../services/fog.service";
import {HttpError} from "../../../models/http-error";
import {ModalComponent} from "../../../custom/modal/modal.component";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import {ToastrService} from "ngx-toastr";
import {Global} from "../../../global";

@Component({
  selector: 'places-fog-cards',
  templateUrl: './fog-cards.component.html'
})
export class FogCardsComponent implements OnInit {
  @Input() fogs: Fog[];
  @Input() place: Place;
  ellipsis = faEllipsisV;

  newFog: Fog;
  addFogForm = new FormGroup({
    name: new FormControl(''),
    mac_address: new FormControl(''),
    ip_address: new FormControl(''),
    place_name: new FormControl(null),
    place_id: new FormControl(null)
  });

  modal;

  errors: string[] = [];

  constructor(private modalService: ModalService, private fogService: FogService,
              private toastr: ToastrService, public global: Global) { }

  ngOnInit(): void {
    this.addFogForm.patchValue({place_name: this.place.name, place_id: this.place.id});
  }

  openAddModal(title, content, buttons) {
    this.modal = this.modalService.show(title, content, buttons);
  }

  deleteFog(fog: Fog) {
    this.fogService.delete(fog).subscribe(() => {

      this.fogs = this.fogs.filter(f => f.id != fog.id);
      this.toastr.success('Success');
    });
  }

  onSubmit() {
    this.newFog = this.addFogForm.value;

    this.fogService.add(this.newFog).subscribe((fog: Fog) => {
      this.fogs.push(fog);
      this.toastr.success('Success');
      this.modalService.close();
    }, (errors: HttpError) => {
      this.modal.errors = errors.errors;
    });

    this.newFog = null;
  }
}
