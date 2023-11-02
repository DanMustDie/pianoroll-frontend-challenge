import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule } from 'src/navbar/navbar.module';
import { PRListModule } from 'src/prlist/prlist.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [NavbarModule,PRListModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
