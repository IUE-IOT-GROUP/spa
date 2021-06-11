import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: ModalComponent[] = [];

    add(id: ModalComponent) {
        this.modals.push(id);
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id !== id);
    }

    toggle(id: string) {
        const modal = this.modals.find(x => x.id === id);
        console.log(modal);
        modal.toggle();
    }
}