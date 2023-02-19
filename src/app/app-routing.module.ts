import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherWidgetComponent } from './weather-widget';

const routes: Routes = [
  { path: '', component: WeatherWidgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
