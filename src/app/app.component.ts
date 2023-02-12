import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { firstValueFrom, Observable } from 'rxjs';
import { ItemsState } from './store/items/items.state';
import { ItemsStateActions } from './store/items/items.state.actions';
import { ItemsStateModel } from './store/items/items.state.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-ngxs';

    constructor(private store: Store) {}

    async changeRandomItem() {
        const items = await firstValueFrom(this.items$);
        const itemIndex = Math.floor(Math.random() * items.length);
        const item = items[itemIndex];

        this.store.dispatch(
            new ItemsStateActions.SetPrice({
                id: item.id,
                price: Math.floor(Math.random() * 100),
            })
        );
    }

    addRandomItem() {
        const id = Math.floor(Math.random() * 10000);

        this.store.dispatch(
            new ItemsStateActions.Add({
                id,
                name: `Item ${id}`,
                price: Math.floor(Math.random() * 1000),
                currency: 'USD',
            })
        );
    }

    @Select(ItemsState.getItems)
    items$!: Observable<ItemsStateModel['items']>;
}
