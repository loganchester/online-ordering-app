import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuMainsComponent } from './menus/menu-mains/menu-mains.component';
import { MainItemSteakComponent } from './mains/main-item-steak/main-item-steak.component';
import { SideItemSaladComponent } from './sides/side-item-salad/side-item-salad.component';
import { SideItemBakedPotatoComponent } from './sides/side-item-baked-potato/side-item-baked-potato.component';
import { SideItemFriesComponent } from './sides/side-item-fries/side-item-fries.component';
import { MainItemBurgerComponent } from './mains/main-item-burger/main-item-burger.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuMainsComponent,
    MainItemSteakComponent,
    SideItemSaladComponent,
    SideItemBakedPotatoComponent,
    SideItemFriesComponent,
    MainItemBurgerComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
