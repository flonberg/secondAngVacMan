import { Injectable, Inject } from '@angular/core';

import { WINDOW } from './window.provider';

@Injectable({
  providedIn: 'root'
})
export class FiveDayCalService {
  dS:[{}];
  constructor( @Inject(WINDOW) private window: Window) {              // WINDOW is some magic I don't understand. 
    this.dS = [{}];
  }  // @Inject is needed 

  makeWeek(advance){
     const mns= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
     let weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
     
    const today = new Date();
    today.setDate(today.getDate() + advance * 7);
    const monDate = this.getMonday(today);
    for (var i=0; i < 5; i++){
      this.dS[i] = { "monthDay" : mns[monDate.getMonth()] + "-" + monDate.getDate(),
                  "dayName" : weekday[i] ,
                  "date" : monDate.toISOString().split('T')[0]};
      monDate.setDate(monDate.getDate() + 1);
    }
  }
  getMonday(d) {
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return  new Date(d.setDate(diff));
  }

}

