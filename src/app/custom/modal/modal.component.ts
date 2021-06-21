import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    animations: []
})
export class ModalComponent {
    @Input() title;
    @Input() contentRef!: TemplateRef<any>;
    @Input() buttons!: TemplateRef<any>;

    @Input() errors: string[] = [];

    @Output()
    closed = new EventEmitter();

    constructor() {
    }

}
