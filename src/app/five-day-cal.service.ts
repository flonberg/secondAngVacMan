import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from './window.provider';

@Injectable({
  providedIn: 'root'
})
export class FiveDayCalService {
  dS:[{}];
  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { 
    this.dS = [{}];
  }  // @Inject is needed 

  test(){
    return 333;
  }
  makeWeek(advance){
     const mns= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
     let weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
     var i = 0;

    const today = new Date();
    today.setDate(today.getDate() + advance * 7);
  
    const monDate = this.getMonday(today);
    for (i=0; i < 5; i++){
    this.dS[i] = { "monthDay" : mns[monDate.getMonth()] + "-" + monDate.getDate(),
                  "dayName" : weekday[i] };
      monDate.setDate(monDate.getDate() + 1);


  

    }
  }
  getMonday(d) {
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return  new Date(d.setDate(diff));
    /*
    return  {
      "month": (dS.getMonth() + 1),
      "day": dS.getDate(),
    };
    */
  }

}

