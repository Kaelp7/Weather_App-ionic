import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
              private http: HttpClient,  
  ) { }

  getWeatherData(): Observable<any> {
    let lat = -37.840935;
    let lon = 144.946457;
    let apiId = 'e1629c7b24d08b1dc9fc87a93ab03cc1';
    let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`;

    return this.http.get(queryString);

  }
}
