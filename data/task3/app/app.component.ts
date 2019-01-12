import { Component,OnInit,  } from '@angular/core';
import * as $ from 'jquery';
import { log } from 'util';
import {MapService} from './service/map.service'
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Coardinates } from './model/coardinates';
import {MapsAPILoader} from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService],
})
export class AppComponent implements OnInit
{

  mapForm:FormGroup;
  title = 'map2';
  coardinates: any;
  lng:any;
  lat:any;
  timestamp:any;
  submitted = false;
  position=[];
  id:any;
//   lat: Number = 18.799448;
//   lng: Number = 73.979021;
markerOpts ='./assets/delivery-truck.png'    

  
constructor(private map : MapService, private formBuilder: FormBuilder) 
{
    this.mapForm = new FormGroup(
		{
    		mapForm: new FormControl()
   		});
}

ngAfterViewInit()
{
    this.getLocation();
	this.id = setInterval(() => 
	{
		this.showPosition(); 
		//this.onSubmit();
		//console.log("first one ")
	}, 7000);  
}
ngOnInit()
{
	// console.log ("My Button Init");
} 
onSubmit()
{
    this.position=[];
    this.position.push(this.coardinates.coords.longitude)
    this.position.push(this.coardinates.coords.latitude)
    this.position.push(this.coardinates.timestamp);
   	this.map.getCoordinateInfo((this.position)).subscribe(
	data => 
	{
		console.log(data);
    },
	error => 
	{
      	console.log('error');
    });
}
  
getLocation() 
{
    if(navigator.geolocation) 
    {
      	navigator.geolocation.getCurrentPosition((pos)=>this.coardinates = pos)
    } 
	else 
	{
      console.log("Geo Location not supported by browser");
    }
}
showPosition() 
{
    this.getLocation();
    this.lng = "";
    this.lat = "";
    this.timestamp = "";
    this.lng = this.coardinates.coords.longitude
    this.lat = this.coardinates.coords.latitude   
    this.timestamp = this.coardinates.timestamp; 
      
}
ngOnDestroy() 
{
	if (this.id)
	{
      clearInterval(this.id);
    }
}

}