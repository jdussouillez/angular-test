import {Component} from "@angular/core";

import {CommonComponent} from "../common/common.component";
import {com} from "../../shared/models/model";
import Bar = com.github.jdussouillez.bean.Bar;

@Component({
    selector: "app-bar",
    templateUrl: "./bar.component.html",
    styleUrls: []
})
export class BarComponent extends CommonComponent<Bar> {

    public constructor() {
        super();
    }
}
