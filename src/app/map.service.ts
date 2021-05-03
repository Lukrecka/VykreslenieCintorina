import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { Cemetery } from './cemetery'
//import { MarkerService } from '../services/map.service';
import * as L from 'leaflet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MapService {

  [x: string]: any;
  serverData: any;
  private apiUrl =  'http://localhost/cintorin.php/';

  constructor(private http: HttpClient,
    private router: Router) {
  }

  readCemetery(){
    return this.http.get<Cemetery[]>(`http://localhost/cintorin.php/`);
    const x = this.http.get(this.apiUrl, httpOptions).subscribe(response => {
      this.control(response);
      console.log(response[0]['meno'])
  })
}

}
