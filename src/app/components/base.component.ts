import {Component, OnDestroy, OnInit} from "@angular/core";

@Component({
    selector: "app-base",
    template: ""
})
export abstract class BaseComponent implements OnInit, OnDestroy {

    public constructor() {
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
    }
}
