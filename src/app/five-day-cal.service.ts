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
     const mns= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
     let weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
     
    const today = new Date();
    today.setDate(today.getDate() + advance * 7);
    var monDate = this.getMonday(today);
    var kludgeDate = this.getMonday(today);                         // to avoid 'date' element coming out 1 day in advance. 
    kludgeDate.setDate(monDate.getDate() - 1);                      // may have something to do with time of day????
    console.log(" 22222 %o", monDate);
    for (var i=0; i < 5; i++){
      this.dS[i] = { "monthDay" : mns[monDate.getMonth()] + "-" + monDate.getDate(),
                  "dayName" : weekday[i] ,
                //  "date" : kludgeDate.toISOString().split('T')[0]};
                  "date" : this.formatDate(monDate)};  
      monDate.setDate(monDate.getDate() + 1);
    //  kludgeDate = this.getMonday(today);
    //  kludgeDate.setDate(monDate.getDate() - 1);
    }
  }
  
  formatDate(date) {
    var d = new Date(date);
    var formatedDate = this.datePipe.transform(d, 'yyyy-MM-dd');
    /*
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
        */
    return formatedDate;
}
  getMonday(d) {
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return  new Date(d.setDate(diff));
  }

}

