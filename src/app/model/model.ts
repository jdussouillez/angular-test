export class Entity<T> {
    id?: string;
    value?: T;
}

export class Foo extends Entity<string> {
    foo?: string;
}

export class Bar extends Entity<string> {
    bar?: string;
}
