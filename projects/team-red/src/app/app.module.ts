import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlueBuyBtnComponent } from './blue-buy-btn/blue-buy-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueBuyBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
