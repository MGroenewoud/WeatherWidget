import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '@app/models';

@Component({
  selector: 'weather-widget-today',
  templateUrl: './weather-widget-today.component.html',
  styleUrls: ['./weather-widget-today.component.scss']
})
export class WeatherWidgetTodayComponent{

  @Input()
  todayWeather!: WeatherModel;

  public currentDate: Date = new Date();
  constructor() { }

}
