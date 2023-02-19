import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { WeatherModel } from '@app/models';

@Directive({
  selector: '[weatherWidgetIcon]'
})
export class WeatherIcon implements OnInit  {

    @Input() weatherWidgetIcon!: WeatherModel;
    @Input() assumeDaytime: boolean = true;

    constructor(private el: ElementRef){
    }

    ngOnInit(): void {
        const cloudGraphic = this.getCloudGraphic();
        this.el.nativeElement.style.backgroundImage = `url(/assets/img/${cloudGraphic}.svg)`;
    }

    public getCloudGraphic(): string {
        const isDayTime =   this.weatherWidgetIcon.sunrise > new Date().valueOf() &&
                            this.weatherWidgetIcon.sunset < new Date().valueOf();

        if (isDayTime || this.assumeDaytime) {
            if (this.weatherWidgetIcon.clouds < 33)
                return 'Sun';
            if (this.weatherWidgetIcon.clouds < 66)
                return 'Cloud-Sun';
        } else {
            if (this.weatherWidgetIcon.clouds < 33)
                return 'Moon';
            if (this.weatherWidgetIcon.clouds < 66)
                return 'Cloud-Moon';
        }
        return 'Cloud';
    }
}