import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherApiOptionsModel } from '@app/models';
import { WeatherModel } from '@app/models';
import { WeatherService } from '@app/services';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherWidgetComponent implements OnInit {

  public today!: WeatherModel;
  public comingWeekDays: WeatherModel[] = [];
  public isLoading: boolean = true;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {

    // Get location for weather
    navigator.geolocation.getCurrentPosition((position) => {
      var options = new WeatherApiOptionsModel();
      options.latitude = position.coords.latitude;
      options.longtitude = position.coords.longitude;

      this.weatherService.getWeather(options).subscribe({
        next: (response) => {
          // Get statistics for right now
          const currentResponse = response.current;
          this.today = new WeatherModel(
            currentResponse.temp,
            currentResponse.feels_like,
            currentResponse.sunrise,
            currentResponse.sunset,
            currentResponse.clouds,
            );

          // Get statistics for the rest of the week. Skip the first day, as that's today's data.
          response.daily.slice(1).forEach(day => {
            this.comingWeekDays.push(new WeatherModel(
              day.temp.day,
              day.feels_like.day,
              day.sunrise,
              day.sunset,
              day.clouds,
            ));
          });
        },
        error: (e) => {
          console.warn(e.error.error.message);
        },
        complete: () => this.isLoading = false,
      });

    }, (error) => {
      console.log(error.message);
    });
  }
}

