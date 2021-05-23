import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    tabs = [
        {
            name: "Dashboard",
            id: 1,
            cardCount: 8,
        },
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
