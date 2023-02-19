export class WeatherModel {
    public temp: number;
    public feelsLike: number;
    public sunrise: number;
    public sunset: number;
    public clouds: number;

    constructor(
        temperature: number, 
        feelsLike: number, 
        sunrise: number, 
        sunset: number, 
        clouds: number
        ) {
            this.temp = temperature;
            this.feelsLike = feelsLike;
            this.sunrise = sunrise * 1000;
            this.sunset = sunset * 1000;
            this.clouds = clouds;
    }
}