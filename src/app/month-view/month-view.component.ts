import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface dateBox {
  dayNumber: number;
  date: Date;
  covererUserId: {
    serviceId: number,
    userkey: number,
    phys2: number
  }
}
@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})



export class MonthViewComponent implements OnInit {
  prevMonthLastDays:[];
  daysS: dateBox[][];
  datStruc: any;
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.daysS = Array(Array());
    var tmpDate = new Date();
    var date = new Date('2019-02-05');                                                        // set the date, done by queryParam
    var firstDayOfShownMonth = new Date(date.getFullYear(), date.getMonth(), 1);              
    var lastDayOfShownMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var dowFD = firstDayOfShownMonth.getDay();                                                // det dayOfWeek e.g. 5 for Friday, 0 = Sunday
    var n = 0;
    this.daysS = Array(Array());                                                              // create 2D array hold days  [week][day]
    console.log("fd  " + dowFD);
   // date.setMonth(date.getMonth() - 1);
    var lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);                
    var lastDayNum = +this.datePipe.transform(lastDayPrevMonth,'d');                          //  e.g. for Jan 31  ->  31
    var firstDayOnCal = lastDayNum - (dowFD -2);   // get dayNum of first Monday on Cal       //  det how many days from prev. month we need. e.g Thurs we need 5 - 2 = 3
    /////////////////            make days of first week      \\\\\\\\\\\\\\\\\\\
    for (let i = 0;  i < 5; i++){                                                              // make the 5 days of the first week;
      if (!this.daysS[0])                                                                     //  if array row has not been defined
        this.daysS[0] = Array();                                                              // define the array for the Week
      this.daysS[0][i] = <dateBox>{};                                                         // define an instance of the daysS interface
      this.daysS[0][i].dayNumber = firstDayOnCal;                                             // set dayNumber element of interface
      if ( i == 0)
        this.daysS[0][i].date = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal);  // set first date on Calendar in array
      firstDayOnCal++; 
      if (i > 0 )  {                            // go to next day
        tmpDate =  new Date(this.daysS[0][i-1].date.getFullYear(), this.daysS[0][i-1].date.getMonth(), this.daysS[0][i-1].date.getDate()) // make a date to increment
                                                                                              // from the previous entry in the loop
        tmpDate.setDate(tmpDate.getDate() + 1);                                               // increment the date
        this.daysS[0][i].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());                                                      // put that date in the dateBox of the MonthStructure
      }
      if (firstDayOnCal == lastDayNum + 1)                                                    // if it is greater than lastDayOfMonth
        firstDayOnCal = 1;                                                                    // go to 1, for the first day of monthShown 
    }
    ///////////  make the suceeding weeks  \\\\\\\\\\\\\\\\\\\\\\\\\\ 
    for (let i=1; i < 4; i++){                                                                // max of 4 more weeks in calendar
        for (let j= 0; j < 5; j++) {                                                           // the days of each week
          tmpDate.setDate(tmpDate.getDate() + 1);                                             // increment the date
            let dayNum = tmpDate.getDay();                                                    // get dayNum of week  0 = Sunday  
          if (dayNum == 6 )                                                                   // if it is Saturday, increment by 2 days
            tmpDate.setDate(tmpDate.getDate() + 2);
            if (!this.daysS[i])                                                                     //  if array row has not been defined
              this.daysS[i] = Array();  
              this.daysS[i][j] = <dateBox>{};                                                         // define an instance of the daysS interface
              this.daysS[i][j].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());    
           
        }

    }
    console.log("i is "   )
  }

}



