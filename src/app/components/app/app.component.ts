import {Component} from "@angular/core";

import {BaseComponent} from "../base.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: []
})
export class AppComponent extends BaseComponent {

    public constructor() {
        super();
    }
}
