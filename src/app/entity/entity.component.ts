import { Component, Input } from '@angular/core';
import { Entity } from "../model/model";

@Component({
  template: ''
})
export abstract class EntityComponent<T, E extends Entity<T>> {

  @Input() id: string | null = null;

  @Input() entity: T | null = null;

  private tmp: E | null = null;

  constructor() {
      console.log(this.tmp);
  }
}
