import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'task2';
  // lat: number = 51.678418;
  // lng: number = 7.809007;
lat: Number = 18.799448;
lng: Number = 73.979021;

lat1: Number = 18.788448;
lng1: Number = 73.980021;

lat2: Number = 18.796448;
lng2: Number = 73.972021;

lat3: Number = 18.792448;
lng3: Number = 73.974021;

lat4: Number = 18.796448;
lng4: Number = 73.970021;
markerOpts ='./assets/delivery-truck.png'    
}
