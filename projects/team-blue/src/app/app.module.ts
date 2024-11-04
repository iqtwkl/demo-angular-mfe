import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlueBasketComponent } from './blue-basket/blue-basket.component';
import { BlueBuyComponent } from './blue-buy/blue-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueBasketComponent,
    BlueBuyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
