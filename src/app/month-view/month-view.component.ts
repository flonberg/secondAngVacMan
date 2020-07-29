import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DatePipe, KeyValue } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';
import { GenEditService } from '../gen-edit.service';
import { LogService } from '../log.service';
//import { ConsoleReporter } from 'jasmine';

interface dateBox {
  dayNumber: number;
  isInCurrMonth: string;
  date: Date;
  dateString: string
  daysSince: number;
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
  daysS: dateBox[][];
  monthName: string;                                                // used in .html
  date: Date;
  monthNumber:number;                                               // used to advance and go back months
  baseDate: Date;    
  physicsDuties:any;
  physicsMonthlyDuties: [];                                         // stores the data from PhysicMonthlyDuty table
  phrase: string;                                                   // Shown in takeADuty Modal
  qParams: any;                                                     // Used as a param for REST getDuties. 
  loggedInUserKey: any;
  dutyOrder: [];
  physicsDutiesClass: any;
  idxForEdit: string;
  loggedInUserLastName: string;
  startDateForGettingData: Date;  
  startDateForGettingDataString: string;
  toPageID: string;
  colors:string[];
  masterArray = ['This new Month View page is part of upgrade of Whiteboard.',
  'To see details, or edit a TimeAway, click on that TimeAway. ',
  'If you have difficulties or questions concerning the page, please email to flonberg@partners.org.'
                ];
  noticeColName='monthView';
  noticeModalID = 'monthViewModalID'
  // used to calculate a dayNumber to use as key
  constructor(private datePipe: DatePipe, private http: HttpClient, 
    private activatedRoute: ActivatedRoute, private genEditSvce: GenEditService,
    private logSvcs:LogService
     ){ }
  ngOnInit(){
    this.activatedRoute                                             // point to the route clicked on
    .queryParams                                                    // look at the queryParams
    .subscribe(queryParams => {   
      this.qParams = queryParams;
      this.genEditSvce.setPlatform();                     // switch between BB and 242 databases. 
      this.genEditSvce.checkIfNoticeNeeded('monthView');     
    });
    this.nextMonth(0);                                              // draw the calendar for current month
    this.monthNumber = 0;                                           // number for going forward or back. 
    this.physicsDutiesClass = [
      {'dutyId':20, 'dutyName':'MorningA-IORT'},
      {'dutyId':10, 'dutyName':'MorningB'},
      {'dutyId':21, 'dutyName':'EveningA'},
      {'dutyId':22, 'dutyName':'EveningB'},
      {'dutyId':25, 'dutyName':'Float1'},
      {'dutyId':26, 'dutyName':'Float2'},
    ]
    this.logSvcs.setURL('http://blackboard-dev.partners.org/dev/FJL/vacMan/writeLog.php');
    this.logSvcs.logMessage('tst');
    this.colors = ['one','two','three','four','five','six'];
  }
  isLoggedInUser(n){                                                // show the loggedInUser's duties in red
    if (this.loggedInUserKey == n)
      return "theUser";
    else
      return "";  
  }
  pagePhysicist(){
    console.log("pagePhysicist " + this.toPageID);
      window.open('http://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&ACTION=PAGE&ID=' 
      + this.toPageID  + '  , _blank');
      document.getElementById('myModal').style.display = "none";  
      return;
  }

  takeAduty(nDutyId, dDayNum){
  //  const v = this.isUserDutyTaker();
    if (this.isUserDutyTaker() !== true){
      window.open('http://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&ACTION=PAGE&ID=' 
      + this.physicsMonthlyDuties[dDayNum][nDutyId]['id'] + '  , _blank');
      return;
    }
    const physicsDutiesSelected = this.physicsDutiesClass.find(t=>t.dutyId == nDutyId);
    this.phrase = "You are assuming --- " +  physicsDutiesSelected['dutyName'] + " on " + dDayNum;         // phrase for the Modal
    this.idxForEdit = this.physicsMonthlyDuties[dDayNum][nDutyId]['idx'];       // used to update the dB
    this.toPageID = this.physicsMonthlyDuties[dDayNum][nDutyId]['id'];
    document.getElementById('myModal').style.display = "block";     // show the modal 
  }

  isUserDutyTaker(){
    if (!this.loggedInUserKey){
      return false;
    }
    return true;
    /*
    var r = false;
    console.log('loggedInUserKey is ' + this.loggedInUserKey);
    Object.keys(this.physicsMonthlyDuties['users']).forEach(key => {
      if (+key === +this.loggedInUserKey) {
        return true;
        }
      });
    return r;
    */
   } 
  confirmDuty(){
    const editParams = {                                            // build dS to user with genEditSvce.update
      'action': 'editAndLog',
      'tableName': 'PhysicsMonthlyDuty',
      'editColNames': ['phys2'],
      'editColVals': [this.loggedInUserKey],
      'whereColName': 'idx',
      'whereColVal': this.idxForEdit,
    }
    document.getElementById(this.idxForEdit).innerText = this.loggedInUserLastName;   // put swapperLastName in box
    this.genEditSvce.genPOST(editParams).subscribe(
      (response)=>{
        console.log("emailService");
      }
    );                             // do the swap in the dB
//    this.genEditSvce.update(editParams);                            // do the swap in the dB
    console.log(" 131   hhhhhhhh  genPOST ");
    document.getElementById('myModal').style.display = "none";      // clse the Modal
  }

  closeModal(){
    document.getElementById('myModal').style.display = "none";
  }
  nextMonth(nn)
  {
    this.daysS = Array(Array());                                     // make array to hold daysS structures
    var tmpDate = new Date();                                       // this is the date which will be incremented
    this.date = new Date();                            //  this will be set to today in production
//    this.date = new Date('2019-01-28');                            //  this will be set to today in production
    this.baseDate = new Date('2010-01-01');

    this.monthNumber += nn;                                        // nn will be either +1 of -1 to go forward or bacf
    if (nn != 0)                                                // if date has been changed by button  
      this.date = new Date(this.date.setMonth(this.date.getMonth()+ this.monthNumber));     // make the new date
    this.monthName = this.datePipe.transform(this.date, 'MMMM-yyyy');                       // used for the caption on the calendar 
    var firstDayOfShownMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);   
    var firstDateOnCalendar = new Date(this.date.getFullYear(), this.date.getMonth(), 1);   
    var monthShowNumber = this.date.getMonth();                                              // use to grey out days NOT in monthShown
    const dowFD = firstDayOfShownMonth.getDay();                                             // det dayOfWeek e.g. 5 for Friday, 0 = Sunday, 1=Monday ...of 
    var lastDayPrevMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0);                
    var lastDayNum = +this.datePipe.transform(lastDayPrevMonth,'d');     //  e.g. for March   ->  31
    //////////  use firstDayOnCal as dateSince to make array of physicsDuties     \\\\\\\\\\\\\\\\\
    var firstDayOnCal = lastDayNum - (dowFD -2);      // get dayNum of first Monday on Cal       //  E.g. April 1 is Wed. to firstDayShown is March 29, so firstDanOnCal = 29
    if (dowFD == 1)
      firstDayOnCal = 1;
    /************  make the first day shown on the calendar  **********************/
    if (dowFD !== 6 && dowFD !== 0)
      firstDateOnCalendar.setDate(firstDateOnCalendar.getDate() - (dowFD - 1 ));              // first of Month is a WeekDay so need to step back to Monday
    if (dowFD === 6 )
      firstDateOnCalendar.setDate(firstDateOnCalendar.getDate()+ 2 );                         // first of Month is Saturday so need to step forward 2 days to Monday
    if (dowFD === 0 )
      firstDateOnCalendar.setDate(firstDateOnCalendar.getDate()+ 1 );                         // first of Month is Sunday so need to step forward 1 day1 to Monday
    this.startDateForGettingDataString = this.datePipe.transform(firstDateOnCalendar, 'yyyy-MM-dd');

console.log('startDataDate ' +    this.startDateForGettingDataString  );

    /////////////////            make days of first week                                        \\\\\\\\\\\\\\\\\\\
    var startDateForGettingData = new Date()                                                     // define a date to set in the below loop
    if (dowFD > 1 && dowFD < 6){                                                                 // if the firstDayOfMonth is NOT Sat or Sun  
      for (let i = 0;  i < 5; i++){                                                              // make the 5 days of the first week;
        if (!this.daysS[0])                                                                     //  if array row has not been defined
          this.daysS[0] = Array();                                                              // define the array for the Week
        this.daysS[0][i] = <dateBox>{};                                                         // define an instance of the daysS interface
        this.daysS[0][i].dayNumber = firstDayOnCal;                                             // set dayNumber element of interface
       /************      first Day of first week **********************/
        if ( i == 0){
          this.daysS[0][i].date = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal);  // set first date on Calendar in array
         tmpDate = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal);  // set first date on Calendar in array
          if (dowFD == 1)
            this.daysS[0][i].date = firstDateOnCalendar;
          startDateForGettingData = this.daysS[0][i].date;
          if (dowFD == 1 || dowFD == 6){
            startDateForGettingData = firstDayOfShownMonth;  
          }                                            
          this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
        }
        /***************    rest of days in first week *******************/
        firstDayOnCal++; 
        if (i > 0 )  {                            // go to next day
          startDateForGettingData = this.daysS[0][i].date;
          tmpDate =  new Date(this.daysS[0][i-1].date.getFullYear(), this.daysS[0][i-1].date.getMonth(), this.daysS[0][i-1].date.getDate()) // make a date to increment                                                                                           // from the previous entry in the loop
          tmpDate.setDate(tmpDate.getDate() + 1);   
                                        // increment the date
          this.daysS[0][i].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());                                                      // put that date in the dateBox of the MonthStructure
          this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
        }
        if (firstDayOnCal == lastDayNum + 1)                                                    // if it is greater than lastDayOfMonth
          firstDayOnCal = 1;                                                                    // go to 1, for the first day of monthShown 
          this.daysS[0][i].dateString = this.datePipe.transform(this.daysS[0][i].date, 'yyyy-MM-dd');   }

        }
    if (dowFD == 1 || dowFD == 6){
      firstDateOnCalendar.setDate(firstDateOnCalendar.getDate()- 1 ); 
      tmpDate = firstDateOnCalendar  ;
      startDateForGettingData = firstDayOfShownMonth;  
    }  
      if (dowFD == 0)
        tmpDate = firstDateOnCalendar;
      for (let i=1; i < 6; i++){                                                              // max of 4 more weeks in calendar
        for (let j= 0; j < 5; j++) {                                                          // the days of each week
          tmpDate.setDate(tmpDate.getDate() + 1);                                             // increment the date
          let dayNum = tmpDate.getDay();                                                      // get dayNum of week, this will be Saturday 
          if (dayNum == 6 )                                                                   // check if it is Saturday, 
            tmpDate.setDate(tmpDate.getDate() + 2);                                           // increment 2 days to get to Monday. 
          if (!this.daysS[i])                                                                 //  if array row has not been defined
              this.daysS[i] = Array();  
              this.daysS[i][j] = <dateBox>{};                                                 // define an instance of the daysS interface
              this.daysS[i][j].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());    // put date in daysS dataStructure.
              this.daysS[i][j].dateString = this.datePipe.transform(this.daysS[i][j].date, 'yyyy-MM-dd');
              this.daysS[i][j].dayNumber = tmpDate.getDate();
              this.daysS[i][j].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";     
        }
    }
    /*************      get the data  ************************/

      this.genEditSvce.getPMDs(this.qParams['userid']).subscribe(
      (res) => {
        this.setPhysicsMonthlyDuties(res);
      },
      err => {
        console.log("error 223");
        console.log(err);
      }
    );
}                                                                                               ////////  end of the routine to build the monthDisplay 

setPhysicsMonthlyDuties(val){
  this.physicsMonthlyDuties = val['data'];   
  console.log("241 %o", val)
  if (val['loggedInUserKey'])                                                       // the data to the monthly schedule
    this.loggedInUserKey = val['loggedInUserKey']                                                       // the userkey to be used for Take-A-Duty                                            // the userkey to be used for Take-A-Duty
  if (val['loggedInUserLastName'])                                             // the userkey to be used for Take-A-Duty
    this.loggedInUserLastName = val['loggedInUserLastName']
  this.physicsDuties = Array();      
  if (val['PhysicsDuties'])  
    this.physicsDuties= val['PhysicsDuties'];                                       // the userkey to be used for Take-A-Duty
  console.log('226 loggedInUserkey is' + this.loggedInUserKey + 'lastName' + this.loggedInUserLastName) 
}
  daysSince(d:Date){
    var diff = Math.abs(this.baseDate.getTime() - d.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24)); 
  }

}

   






