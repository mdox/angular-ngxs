import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, updateItem } from '@ngxs/store/operators';
import { Item } from 'src/app/interfaces/item.interface';
import { ItemsStateActions } from './items.state.actions';
import { ItemsStateModel } from './items.state.model';

@State<ItemsStateModel>({
    name: 'items',
    defaults: {
        items: [],
    },
})
@Injectable()
export class ItemsState {
    @Action(ItemsStateActions.Add)
    add(ctx: StateContext<ItemsStateModel>, action: ItemsStateActions.Add) {
        ctx.setState(
            patch<ItemsStateModel>({
                items: append([action.payload]),
            })
        );
    }

    @Action(ItemsStateActions.SetPrice)
    setPrice(
        ctx: StateContext<ItemsStateModel>,
        action: ItemsStateActions.SetPrice
    ) {
        ctx.setState(
            patch<ItemsStateModel>({
                items: updateItem<Item>(
                    (item) => item?.id === action.payload.id,
                    patch<Item>({ price: action.payload.price })
                ),
            })
        );
    }

    @Selector()
    static getItems(state: ItemsStateModel) {
        return state.items;
    }

    @Selector()
    static getItemById(state: ItemsStateModel) {
        return (id: Item['id']) => {
            return state.items.find((item) => item.id === id);
        };
    }
}
