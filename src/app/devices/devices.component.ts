import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
})

export class DevicesComponent implements OnInit {

    tabs = [
        {
            name: "All",
            id: 1,
            cardCount: 20,
        },
        {
            name: "Distance",
            id: 2,
            cardCount: 5,
        },
        {
            name: "Heat Index",
            id: 3,
            cardCount: 2,
        },
        {
            name: "Humidity",
            id: 4,
            cardCount: 3,
        },
        {
            name: "Pressure",
            id: 5,
            cardCount: 8,
        },
        {
            name: "Temperature",
            id: 6,
            cardCount: 2,
        }
    ];

    currentTabId;

    constructor() {
        this.currentTabId = this.tabs[0].id;
    }

    ngOnInit(): void {
    }

    changeTab(id) {
        this.currentTabId = id;
    }

    counter(i) {
        return new Array(i);
    }
}