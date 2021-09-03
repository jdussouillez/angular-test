import { Component } from '@angular/core';
import { EntityComponent } from "../entity/entity.component";
import { Foo } from "../model/model";

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: []
})
export class FooComponent extends EntityComponent<string, Foo> {

  constructor() {
    super();
  }
}
