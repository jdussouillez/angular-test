/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

export namespace com.github.jdussouillez.bean {

    export class Entity<T> {
        id: T;
    }
}

export namespace com.github.jdussouillez.bean {

    export class SyncableEntity extends com.github.jdussouillez.bean.Entity<string> {
        lastUpdate?: Date;
    }
}

export namespace com.github.jdussouillez.bean {

    export class Bar extends com.github.jdussouillez.bean.SyncableEntity {
    }

}

export namespace com.github.jdussouillez.bean {

    export class Foo extends com.github.jdussouillez.bean.SyncableEntity {
    }
}
