import { Item } from 'src/app/interfaces/item.interface';

export namespace ItemsStateActions {
    export  class Add {
        static readonly type = '[Items] Add';
        constructor(public payload: Item) {}
    }

    export class SetPrice {
        static readonly type = '[Items] SetPrice';
        constructor(public payload: { id: Item['id']; price: Item['price'] }) {}
    }
}
