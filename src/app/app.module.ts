import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { ItemsState } from './store/items/items.state';
import { ItemComponent } from './components/item/item.component';

@NgModule({
    declarations: [AppComponent, ItemComponent],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([ ItemsState ])
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
