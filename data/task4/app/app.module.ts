import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core'; 
import { AgmDirectionModule } from 'agm-direction';
import {AppRoutingModule} from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyA_566iUPj0kEQ1x3ctlj4UtqoyNyNEFhQ',
    }),
    AgmDirectionModule      // agm-direction
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
