import { Component, Input, OnInit } from '@angular/core';
import { WeatherModel } from '@app/models';

@Component({
  selector: 'weather-widget-comingweek',
  templateUrl: './weather-widget-comingweek.component.html',
  styleUrls: ['./weather-widget-comingweek.component.scss']
})
export class WeatherWidgetComingweekComponent implements OnInit {

  @Input()
  comingDays: WeatherModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public getDate(date: number): Date {
    return new Date(date);
  }

}
