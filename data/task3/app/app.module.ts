import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MapService} from './service/map.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule }   from '@angular/forms';
// import { FormGroup } from '@angular/forms';
import { FormsModule,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {MapsAPILoader} from '@agm/core';
import { MarkerManager } from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule,
    // GoogleMapsAPIWrapper,
    // MarkerManager,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [MapService],
  bootstrap: [AppComponent
]
})
export class AppModule { }
