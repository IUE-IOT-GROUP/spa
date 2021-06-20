import {Injectable, TemplateRef} from '@angular/core';
import {NgElement, WithProperties} from "@angular/elements";
import {ModalComponent} from "./modal.component";

@Injectable({providedIn: 'root'})
export class ModalService {

    constructor() {
    }

    show(title: string, templateRef: TemplateRef<any>, buttons?: TemplateRef<any>) {
        const popupEl = document.createElement('modal-element') as NgElement & WithProperties<{ contentRef: TemplateRef<any>, title: string, buttons: TemplateRef<any> }>;

        popupEl.addEventListener('closed', () => {
            document.body.removeChild(popupEl)
        });

        popupEl.title = title;
        popupEl.contentRef = templateRef;

        if (buttons != undefined)
            popupEl.buttons = buttons;

        document.body.appendChild(popupEl);

        return popupEl;
    }

    close() {
        document.querySelector('modal-element').dispatchEvent(new Event('closed'));
    }
}
