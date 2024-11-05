import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlueBuyBtnComponent } from './blue-buy-btn/blue-buy-btn.component';
import { BlueBasketCmpComponent } from './blue-basket-cmp/blue-basket-cmp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BlueBuyBtnComponent,
    BlueBasketCmpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
