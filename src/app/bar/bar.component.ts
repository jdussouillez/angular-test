import { Component } from '@angular/core';
import { EntityComponent } from "../entity/entity.component";
import { Bar } from "../model/model";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: []
})
export class BarComponent extends EntityComponent<string, Bar> {

  constructor() {
    super();
  }
}
