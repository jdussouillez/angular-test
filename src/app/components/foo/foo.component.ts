import {Component} from "@angular/core";

import {CommonComponent} from "../common/common.component";
import {com} from "../../shared/models/model";
import Foo = com.github.jdussouillez.bean.Foo;

@Component({
    selector: "app-foo",
    templateUrl: "./foo.component.html",
    styleUrls: []
})
export class FooComponent extends CommonComponent<Foo> {

    public constructor() {
        super();
    }
}
