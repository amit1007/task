import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import {AgmMarker} from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyA_566iUPj0kEQ1x3ctlj4UtqoyNyNEFhQ',
    }),
    // AgmMarker,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
