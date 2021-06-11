import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private el: ElementRef, private modalService: ModalService) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.element.classList.add("hidden");
    // document.body.classList.ad
    document.body.appendChild(this.element);

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }


  toggle() {
    this.element.classList.toggle("hidden");
  }

}