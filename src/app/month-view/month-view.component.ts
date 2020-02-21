import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface dateBox {
  dayNumber: number;
  isInCurrMonth: string;
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
  monthName: string;
  date: Date;
  monthNumber:number;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(){
    this.nextMonth(0);                                                                      // draw the calendar for current month
    this.monthNumber = 0;                                                                   // number for going forward or back. 
  }
  nextMonth(nn)
  {
    this.daysS = Array(Array());                                                            // make array to hold daysS structures
    var tmpDate = new Date();                                                               // this is the date which will be incremented
    this.date = new Date('2020-01-28');                                                     //  this will be set to today in production
    this.monthNumber += nn;                                                                 // nn will be either +1 of -1 to go forward or bacf
    if (nn != 0)                                                                            // if date has been changed by button  
      this.date = new Date(this.date.setMonth(this.date.getMonth()+ this.monthNumber));     // make the new date
    this.monthName = this.datePipe.transform(this.date, 'MMMM-yyyy');                       // used for the caption on the calendar                           // set the date, done by queryParam
    var firstDayOfShownMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);              
    var monthShowNumber = this.date.getMonth();                                              // use to grey out days NOT in monthShown
    var dowFD = firstDayOfShownMonth.getDay();                                                // det dayOfWeek e.g. 5 for Friday, 0 = Sunday, of firstDayOfMonthShown
    var lastDayPrevMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0);                
    var lastDayNum = +this.datePipe.transform(lastDayPrevMonth,'d');                          //  e.g. for March   ->  31
    var firstDayOnCal = lastDayNum - (dowFD -2);   // get dayNum of first Monday on Cal       //  E.g. April 1 is Wed. to firstDayShown is March 29, so firstDanOnCal = 29
    /////////////////            make days of first week                                        \\\\\\\\\\\\\\\\\\\
    if (dowFD > 0 && dowFD < 6){                                                               // if the firstDayOfMonth is NOT Sat or Sun  
      for (let i = 0;  i < 5; i++){                                                              // make the 5 days of the first week;
        if (!this.daysS[0])                                                                     //  if array row has not been defined
          this.daysS[0] = Array();                                                              // define the array for the Week
        this.daysS[0][i] = <dateBox>{};                                                         // define an instance of the daysS interface
        this.daysS[0][i].dayNumber = firstDayOnCal;                                             // set dayNumber element of interface
        if ( i == 0)
          this.daysS[0][i].date = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal);  // set first date on Calendar in array
          this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
        firstDayOnCal++; 
        if (i > 0 )  {                            // go to next day
          tmpDate =  new Date(this.daysS[0][i-1].date.getFullYear(), this.daysS[0][i-1].date.getMonth(), this.daysS[0][i-1].date.getDate()) // make a date to increment
                                                                                                // from the previous entry in the loop
          tmpDate.setDate(tmpDate.getDate() + 1);                                               // increment the date
          this.daysS[0][i].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());                                                      // put that date in the dateBox of the MonthStructure
          this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";

        }
        if (firstDayOnCal == lastDayNum + 1)                                                    // if it is greater than lastDayOfMonth
          firstDayOnCal = 1;                                                                    // go to 1, for the first day of monthShown 
      }
    }
    /////////////         take care of months which start on Sat or Sun                       \\\\\\\\\\\\\\\\\\\\\\\\\\\\
    if (dowFD == 6)
      tmpDate =  new Date(this.date.getFullYear(), this.date.getMonth(), 2);                            // if firstDayOfMonth is Sat. increment by 2 days
    if (dowFD == 0)
      tmpDate =  new Date(this.date.getFullYear(), this.date.getMonth(), 1);                            // if firstDayOfMonth is Sub. increment by 1 day  
    ///////////  make the suceeding weeks  \\\\\\\\\\\\\\\\\\\\\\\\\\ 
    for (let i=1; i < 6; i++){                                                                // max of 4 more weeks in calendar
        for (let j= 0; j < 5; j++) {                                                           // the days of each week
          tmpDate.setDate(tmpDate.getDate() + 1);                                             // increment the date
            let dayNum = tmpDate.getDay();                                                    // get dayNum of week  0 = Sunday  
          if (dayNum == 6 )                                                                   // if it is Saturday, increment by 2 days
            tmpDate.setDate(tmpDate.getDate() + 2);
            if (!this.daysS[i])                                                                     //  if array row has not been defined
              this.daysS[i] = Array();  
              this.daysS[i][j] = <dateBox>{};                                                         // define an instance of the daysS interface
              this.daysS[i][j].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());    // put date in daysS dataStructure.
              this.daysS[i][j].dayNumber = tmpDate.getDate();
              this.daysS[i][j].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";   
        }
    }
    console.log("i is "   )
  }
}

   






