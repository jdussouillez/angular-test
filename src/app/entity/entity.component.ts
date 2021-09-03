import { Component, Input } from '@angular/core';

export class Entity {
    id?: string;
}

@Component({
  template: ''
})
export abstract class EntityComponent<T extends Entity> {

  @Input() id: string | null = null;

  @Input() entity: T | null = null;

  constructor() { }
}
