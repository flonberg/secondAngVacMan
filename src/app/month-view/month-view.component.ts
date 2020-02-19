import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface dateBox {
  dayNumber: number;
  date: Date;
  covererUserId: number;
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
    var date = new Date('2019-02-05');          // set the date, done by queryParam
    var firstDayOfShownMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var dowFD = firstDayOfShownMonth.getDay();            // 5 for Thursday
    var n = 0;
    this.daysS = Array(Array());
    console.log("fd  " + dowFD);
    date.setMonth(date.getMonth() - 1);
    var lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var lastDayNum = +this.datePipe.transform(lastDayPrevMonth,'d');
    var dayOnCal = lastDayNum - (dowFD -2);   // get dayNum of first Monday on Cal
    // make days of first week
    for (let i = 0;  i < 5; i++){ 
      if (!this.daysS[0])
        this.daysS[0] = Array();                // define the array for the Week
      this.daysS[0][i] = <dateBox>{};           // definte the instance of the daysS
      this.daysS[0][i].dayNumber = dayOnCal;             // set day in array
      if ( i == 0)
        this.daysS[0][i].date = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), dayOnCal);  // set date in array
      dayOnCal++; 
      if (i > 0 )  {                            // go to next day
        tmpDate =  new Date(this.daysS[0][i-1].date.getFullYear(), this.daysS[0][i-1].date.getMonth(), this.daysS[0][i-1].date.getDate())
        tmpDate.setDate(tmpDate.getDate() + 1); // increment the date
         this.daysS[0][i].date = tmpDate;
      }
      if (dayOnCal == lastDayNum + 1)           // if it is greater than lastDayOfMonth
        dayOnCal = 1;                           // go to 1. 
    }
    console.log("i is "   )
  }

}



