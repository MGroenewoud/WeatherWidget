import { Pipe } from "@angular/core";

@Pipe({name: 'roundnumber'})
export class RoundNumberPipe {
  transform (num:number) {
    if(num)
      return Math.round(num);
    else
      return 0;
  }
}
