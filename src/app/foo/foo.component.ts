import { Component } from '@angular/core';
import { Entity, EntityComponent } from "../entity/entity.component";

export class Foo extends Entity {
    foo?: string;
}

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: []
})
export class FooComponent extends EntityComponent<Foo> {

  constructor() {
    super();
  }
}
