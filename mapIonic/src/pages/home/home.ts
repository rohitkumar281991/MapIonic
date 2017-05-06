import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MapDirective} from '../../components/map/map'
var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
@ViewChild('map') mapElement;
map:any;
  constructor(public navCtrl: NavController) {

  }
ionViewDidLoad(){
  this.initMap();
}
initMap(){
  let latlng = new google.maps.LatLng(-34.9290,138.6010);
  let mapOptions = {
    center:latlng,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
}
}
