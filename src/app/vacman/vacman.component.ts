import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface tAparams {
  startDate? : string,
  endDate?: string,
  reasonIdx?: number,
  note?: string,
  vidx: string;
}
interface calParams {
  firstMonthName: string,
  secondMonthName: string,
  daysInFirstMonth:number,
  daysInSecondMonth: number,
  lastDateOnCal: Date,
}
@Component({
  selector: 'app-vacman',
  templateUrl: './vacman.component.html',
  styleUrls: ['./vacman.component.css']
})
export class VacmanComponent implements OnInit {
  userid: string;
  monthInc:number = 0;
  getVacURL = 'https://whiteboard.partners.org/esb/FLwbe/vacation/getMDtAs.php?adv='+ this.monthInc;
  vacData: any;
  dayArray = [[]]
  calDates: Date[] = Array();
  v1: number;
  numDaysOnCal: number;

  constructor(private http: HttpClient, private datePipe: DatePipe , private activatedRoute: ActivatedRoute) {
    this. activatedRoute.queryParams.subscribe(params =>{
      this .userid = params['userid']
    })
   }

  ngOnInit() {
  }
  /**
   * Get tA data from 242.  The URL has GET params det'ing the monthInc, which det's the 2-month data acquisition interval
   */  
   private getTheData(){
    console.log("68 url is %o", this .getVacURL)
    this .http.get(this .getVacURL).subscribe(res =>{
      this .vacData = res;
        console.log("62 vacData is %o", this. vacData)
      for (const tRow in this. vacData){ 
        this.makeDaysOfRow(this .vacData[tRow])               // fill out the row of boxes for the Calenday
        this .vacData[tRow][9] = (this .dayArray);            // dayArray is array of dayNumbers used to det the TODAY box      
      }  
    })
  }   
    /**
   * Main loop for filling out the Calendar Row for a TimeAway, fills in all the day boxes
   * @param vacRow 
   * @returns 
   */
private makeDaysOfRow(vacRow){
  let dBC = this. daysBeforeCalcStart(vacRow[0])          // if first tA starts in earlier month
    for (let i = 0; i < vacRow[0]['daysTillStartDate']; i++){
      this. dayArray[0][i] = i + 1;
  }
  // go to a date after the end of the tA  
    this .v1 = vacRow[0]['daysTillStartDate'] + vacRow[0]['vacLength'] 
    if (!vacRow[1]){                                      // this is the last tA in the row
      this .makeTillEndDays(this .v1,1);                        // fill out the rest of the dayNum
      this .makeTillEndBoxes(vacRow[0])
      return;                                             // don't do anything else
    }
    this .v1 = this .fillOutRow(vacRow[0], vacRow[1], this .v1, 1, dBC)
    this .v1 += (vacRow[1]['vacLength'] )                       // increment to end of second tA  tA[1]                  
    if (!vacRow[2]){                                      // if this is the LAST tA / there is NO THIRD tA
      this .makeTillEndDays(this .v1,2);                        // fill out the rest of the days
      return;
    }
    // if there is a THIRD tA  
    this .v1 = this .fillOutRow(vacRow[1], vacRow[2], this .v1, 2, dBC)
    this .v1 += vacRow[2]['vacLength']
    if (!vacRow[3]){
      this .makeTillEndDays(this .v1,3);
      vacRow[2][10] = this .makeTillEndBoxes(vacRow[2])
      return;
    }
      // if there is a FOURTH tA
    this .v1 = this .fillOutRow(vacRow[2], vacRow[3], this .v1, 3, dBC)
      this .v1 += vacRow[3]['vacLength']
      if (!vacRow[4]){
        this .makeTillEndDays(this .v1,4);
        vacRow[3][10] = this .makeTillEndBoxes(vacRow[3])
        return;
      }  
}                                           // end of loop to fill out calendar row to tA. 
/**
 * Calculate the number of days from firstDayOnCalendar to start of tA
 * @param vac 
 * @returns dBC
 */
  private daysBeforeCalcStart(vac){
    let theStartDate = new Date(vac['startDate'])
    var diff = this .calDates[0].valueOf() - theStartDate.valueOf() ;
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    if (diff >  0){
      return  diff -1 ;
    }
    return 0;
  }
  /**
 * Creates an array used by *ngFor to create just enuff boxes for the CalendarRow
 * @param vac 
 * @returns 
 */
private makeTillEndBoxes(vac){
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  let endDate = new Date(vac['endDate'])
  var calEndDate = new Date( this. calDates[this. calDates.length-1])
  var diff =Math.round( (calEndDate.valueOf() - endDate.valueOf())/oneDay);
  let arr = Array()
  for (let i=0; i < diff; i++)
    arr[i] = i;
  return arr;
}
/**
 *  Fills in the days from the last day of the tA till the end of the month
 *  Used when this is the last tA of a row
 * @param v1   this index/day of the last day of the tA
 * @param n    the index of the dayArray which is being filled in
 */
 private makeTillEndDays(v1, n ){
  let tillEnd = this .numDaysOnCal- v1;
  if (this .monthInc > 0){
    console.log("164 %o", this .numDaysOnCal)
  }
  for (let k=0; k < tillEnd; k++){
    v1++
    if (!this .dayArray[n]){
      this .dayArray[n] = Array()
      this. dayArray[n][0] = v1;
    }
    else
      this .dayArray[n].push(v1);
  }   
}
/**
 * Fills out row with dayNumbers matching the dayNumber of calendar top row, so can detect TODAY, Used by makeDaysOfRow
 * @param tA0 The EARLIER of the pair of tAs
 * @param tA1 the LATER of the pair of tAs
 * @param v1  The current day/index
 * @param n   The index of the row, e.g. the 3rd row in the calendar
 */
 private fillOutRow(tA0, tA1, v1, n, dayBefore){
  let d1 = this. daysBetweenA(tA0['endDate'], tA1['startDate']) -1
  //let dayBefore = this. daysBeforeCalcStart(tA0)
  for (let k=0; k < d1; k++){                           // loop and push required dayNums
    this .v1++;                                                                           
    if (!this .dayArray[n]){
      this .dayArray[n] = Array();
      this .dayArray[n][0] = this .v1 - dayBefore;
    }
    else
      this .dayArray[n].push(this .v1 - dayBefore) ;                         // into the dataStruct
  }
  return this .v1;
}

private daysBetweenA(val1, val2){
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var d1 = new Date(val1)
  var d2= new Date( val2)
  var tst = d2.valueOf() - d1.valueOf();
  var diff =Math.round( (d2.valueOf() - d1.valueOf())/oneDay);
//console.log("420 %o --- %o --- %o", d1, d2, diff)    
  return diff ;
} 

}
