import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task4';
public lat: Number = 18.799448
public lng: Number = 73.979021 
 
public origin: any
public destination: any
public markerOpts: any
public options: any

ngOnInit() {
  this.getDirection();
  this.options = {
    suppressMarkers: true,
  };

  this.markerOpts = {
          origin: {
            icon: '',
          },
          destination: {
             icon: './assets/delivery-truck.png',
            color: '#CC0000',
          fontFamily: '',
          fontSize: '14px',
          fontWeight: 'bold',
          text: 'Some Text',
          },
      };
}
getDirection() {
  this.origin = { lat: 18.799448, lng: 73.979021 }
  this.destination = { lat: 18.799524, lng: 73.975017 }
}

}
