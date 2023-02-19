// Angular modules
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Project code
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  WeatherWidgetComponent,
  WeatherWidgetTodayComponent,
  WeatherWidgetComingweekComponent,
  WeatherIcon
} from './weather-widget';

import { RoundNumberPipe } from './pipes';

// https://github.com/ngx-translate/core
// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    WeatherIcon,
    WeatherWidgetTodayComponent,
    WeatherWidgetComingweekComponent,
    RoundNumberPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
