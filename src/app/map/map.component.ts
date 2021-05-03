import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  private apiUrl =  'http://localhost/cintorin.php/';
  ludia: ArrayBuffer;
  [x: string]: any;
  
  constructor(private http: HttpClient) { }
  ngAfterViewInit(): void {
    this.initMap();
    this.readValues();
  }

  private initMap(): void{

    this.map = L.map('map').setView([48.229384,17.717559],19);
    var center = [48.229384,17.717559];
    const title = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    //title.addTo(this.map);
    var bounds = [[48.229314,17.717759], [48.229384,17.717559]];     
    var rectangle = L.rectangle(bounds,{color: "#1aff00", weight: 1}).addTo(this.map);
    var bounds2 = [[48.229234,17.717759], [48.229304,17.717559]];     
    var rectangle2 = L.rectangle(bounds2,{color: "#ff0015", weight: 1}).addTo(this.map)
    //var marker = L.marker([48.229384,17.717559]).addTo(this.map);
    var imageUrl = 'http://ukazcicky.mywire.org/cintorin/bg.jpg',
    imageBounds = [center, [48.227384,17.719559]];

  L.imageOverlay(imageUrl, imageBounds).addTo(this.map);
  L.imageOverlay(imageUrl, imageBounds).bringToFront();
  }

  readValues(){
    const x = this.http.get(this.apiUrl, httpOptions).subscribe(response => {
      this.control(response);
      console.log(response[0]['meno'])
    });
  }

}
