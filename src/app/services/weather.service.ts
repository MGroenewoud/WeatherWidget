import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { WeatherApiOptionsModel, WeatherApiResponseModel } from '@app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // options: WeatherApiOptionsModel
  public getWeather(options: WeatherApiOptionsModel): Observable<WeatherApiResponseModel> {
    var url = `${environment.weatherApiUrl}?lat=${options.latitude}&lon=${options.longtitude}&appid=${environment.weatherApiKey}&units=metric`;

    return this.http.get<WeatherApiResponseModel>(url);
  }
}
