import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';
import { ItemsState } from 'src/app/store/items/items.state';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
    @Input()
    id: Item['id'] = -1;

    item$!: Observable<Item | undefined>;

    constructor(private store: Store) {
        this.item$ = this.store
            .select(ItemsState.getItemById)
            .pipe(map((fn) => fn(this.id)));
    }
}
