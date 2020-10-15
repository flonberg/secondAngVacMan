import { Injectable, Inject } from '@angular/core';

import { WINDOW } from './window.provider';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FiveDayCalService {
  dS:[{}];
  constructor( @Inject(WINDOW) private window: Window , private datePipe: DatePipe,) {              // WINDOW is some magic I don't understand. 
    this.dS = [{}];
  }  // @Inject is needed 

  makeWeek(advance){
    const today = new Date();                                                   // make today's date
    today.setDate(today.getDate() + advance * 7);                               // go forward by 'advance' number of weeks
    var monDate = this.getMonday(today);                                        // go back to the Monday of that weed
    for (var i=0; i < 5; i++){                                                  // iterate over 5 days of the week
      this.dS[i] = { "monthDay" :  this.datePipe.transform(monDate, 'MMM d') ,  // form like 'Jun 15'
                  "dayName" : this.datePipe.transform(monDate, 'EEEE') ,        // form like 'Monday'
                  "date" : this.datePipe.transform(monDate, 'yyyy-MM-dd')       // form like '2020-04-13'
                };  
      monDate.setDate(monDate.getDate() + 1);                                   // advance to next day
    }
  }
  getMonday(d) {
    var day = d.getDay(),                                                       // get like 0=Sunday, 1=Monday ...
    diff = d.getDate() - day + (day == 0 ? -6:1);                               // find day of last Monday, e.g. Oct 15 -> 12
    return  new Date(d.setDate(diff));
  }
}

