import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs/operators';

@Component({
    selector: 'app-places',
    templateUrl: './places.component.html',
    styleUrls: ['./places.component.scss']
})

export class PlacesComponent implements OnInit {

    tabs = [
        {
            name: "Residence",
            id: 1,
            cardCount: 9
        },
        {
            name: "Company",
            id: 2,
            cardCount: 5,
        },
        {
            name: "Summerhouse",
            id: 3,
            cardCount: 10
        },
    ];

    currentTabId;

    constructor() {
        this.currentTabId = this.tabs[0].id;
    }

    ngOnInit(): void {
        console.log(this.tabs);
    }

    changeTab(id) {
        this.currentTabId = id;
    }

    counter(i) {
        return new Array(i);
    }
}