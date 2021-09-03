import {Input, Component} from "@angular/core";

import {BaseComponent} from "../base.component";
import {com} from "../../shared/models/model";
import SyncableEntity = com.github.jdussouillez.bean.SyncableEntity;

@Component({
    template: ""
})
export abstract class CommonComponent<T extends SyncableEntity> extends BaseComponent {

    @Input() public id: string;

    public elements: T[];

    protected constructor() {
        super();
    }
}
