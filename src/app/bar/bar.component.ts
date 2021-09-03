import { Component } from '@angular/core';
import { Entity, EntityComponent } from "../entity/entity.component";

export class Bar extends Entity {
    bar?: string;
}

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: []
})
export class BarComponent extends EntityComponent<Bar> {

  constructor() {
    super();
  }
}
