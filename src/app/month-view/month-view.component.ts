import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() count: number;                                           // used to switch to Proton Calendar
  daysS: dateBox[][];                                               // populates the days in calendar
  monthName: string;                                                // used in .html for caption on calendar
  date: Date;
  monthNumber:number;                                               // used to advance and go back months
  //baseDate: Date;    
  physicsDuties:any;                                                // iterated over in .html 
  physicsMonthlyDuties: [];                                         // stores the data from PhysicMonthlyDuty table
  phrase: string;                                                   // Shown in takeADuty Modal
  qParams: any;                                                     // Holds the queryParams from Router 
  loggedInUserKey: number;                                          // keep track of the loggedInUser, returned from dB
//  dutyOrder: [];
  helpArray:[String];                                               // phrases for dynamic HelpArray
  physicsDutiesClass: any;
  idxForEdit: string;                                               // dB idx for updating the dB
  loggedInUserLastName: string;
  //startDateForGettingData: Date;  
  //startDateForGettingDataString: string;
  toPageID: string;                                                 // used for page link 
  //colors:string[];
  masterArray = ['This new Month View page is part of upgrade of Whiteboard.',
  'If you have difficulties or questions concerning the page, please email to flonberg@partners.org.'
                ];
  noticeColName='monthView';                                        // for Notice for change-notification
  noticeModalID = 'monthViewModalID'                                // the modal holding the change-notification
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
          this.genEditSvce.setPlatform();                               // switch between BB and 242 databases. 
          this.genEditSvce.checkIfNoticeNeeded('monthView');            // implements the Change Notification
      });
      this.nextMonth(0);                                              // GET the DATA  & draw the calendar for current month
      if (this.loggedInUserKey){
        this.helpArray = ['To take a duty, click on the on the name of physicists who has that duty'];
      }
        else {
          this.helpArray = ['Click on a name to page. '];
        }
      this.monthNumber = 0;                                           // number for going forward or back. 
      this.logSvcs.setURL('http://blackboard-dev.partners.org/dev/FJL/vacMan/writeLog.php');
  }
  nextMonth(nn)                                                                       // 
  {
      /*************      get the data  ************************/
      var url =  'REST_GET.php?action=getPMDs&userid=' + this.qParams['userid'] ; 
      this.genEditSvce.genGet(url ).subscribe(  
      (res) => {
        this.setPhysicsMonthlyDuties(res);
      },
      err => {
        console.log(err);
      }
    );
    this.daysS = Array(Array());                                                      // make array to hold daysS structures
    var tmpDate = new Date();                                                         // this is the date which will be incremented
    this.date = new Date();                                                           //  today's date
    this.monthNumber += nn;                                                           // nn will be either +1 of -1 to go forward or bacf
    if (nn != 0)                                                                      // if date has been changed by button  
      this.date = new Date(this.date.setMonth(this.date.getMonth()+ this.monthNumber));     // advance to month indicated by nn 
    this.monthName = this.datePipe.transform(this.date, 'MMMM-yyyy');                 // used for the caption on the calendar 
    var firstDayOfShownMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);   
    var monthShowNumber = this.date.getMonth();                                       // use to grey out days NOT in monthShown
    var lastDayPrevMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0);    
    var lastDayNumPrevMonth = lastDayPrevMonth.getDay();                              // Full date of last day of prevMonth
    var lastDayNum = +this.datePipe.transform(lastDayPrevMonth,'d');                  //  e.g. for March   ->  31
   /*********   derive the first date to appear on the first row of the calendar   ***********************/
    if (lastDayNumPrevMonth > 0 && lastDayNumPrevMonth < 5){                          // if lastDayOfPrevMonth is NOT weekend OR a Friday
      for(var i = 1; i < lastDayNumPrevMonth; i++ ){                                  // loop sufficient to 
            lastDayPrevMonth.setDate(lastDayPrevMonth.getDate() -1);                  // get to Monday which will be the first date on calendar
          }
        }
    else  if (lastDayNumPrevMonth == 5)                                                 // if lastDayOfPrevMonth is a Friday
        lastDayPrevMonth.setDate(lastDayPrevMonth.getDate() + 3 );                      // increment if by 3 days to get to Monday to use for firstDayOnCalendar
    else  if (lastDayNumPrevMonth == 6)
      lastDayPrevMonth.setDate(lastDayPrevMonth.getDate() + 2 );                        // mm for a Saturday
    else  if (lastDayNumPrevMonth == 0)
      lastDayPrevMonth.setDate(lastDayPrevMonth.getDate() + 1 );                        // mm for a Sunday
    var firstDateOnCalendar = lastDayPrevMonth;

    var firstDayOnCal = firstDateOnCalendar.getDate();                                  // the dayNum e.g. 0 = Sunday ...
    const dowFD = firstDayOfShownMonth.getDay();                                        // det dayOfWeek e.g. 5 for Friday, 0 = Sunday, 1=Monday ...of firstDayOfShownMonth
    if (dowFD == 1)                                                                     // DayOfWeek of first day on Calendar is Monday, then the firstDate on cal is the '1' of month
      firstDayOnCal = 1;
    /////////////////            make days of first week                                        \\\\\\\\\\\\\\\\\\\
    var startDateForGettingData = new Date()                                            // define a date to set in the below loop
    if (dowFD > 0 && dowFD < 6)                                                         // if the firstDayOfMonth is NOT Sat or Sun  
      { 
      for (let i = 0;  i < 5; i++)                                                      // make the 5 days of the first week;
        {
        if (!this.daysS[0])                                                             //  if array row has not been defined
            this.daysS[0] = Array();                                                    // define the array for the Week
        this.daysS[0][i] = <dateBox>{};                                                 // define an instance of the daysS interface
        this.daysS[0][i].dayNumber = firstDayOnCal;                                     // set dayNumber element of interface
        /************      first Day of first week **********************/
        if ( i == 0)
          {
            this.daysS[0][i].date = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal);  // set first date on Calendar in array
            tmpDate = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal);  // set first date on Calendar in array
            if (dowFD == 1)
              this.daysS[0][i].date = firstDateOnCalendar;
        //    startDateForGettingData = this.daysS[0][i].date;
            if (dowFD == 1 || dowFD == 6){
         //     startDateForGettingData = firstDayOfShownMonth; 
            }                                            
            this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
          }
          /***************    rest of days in first week *******************/
          firstDayOnCal++; 
          if (i > 0 )  {                            // go to next day
            tmpDate =  new Date(this.daysS[0][i-1].date.getFullYear(), this.daysS[0][i-1].date.getMonth(), this.daysS[0][i-1].date.getDate()) // make a date to increment                                                                                           // from the previous entry in the loop
            tmpDate.setDate(tmpDate.getDate() + 1);                                               // increment the date
                                        
            this.daysS[0][i].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());                                                      // put that date in the dateBox of the MonthStructure
            this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
          }
          if (firstDayOnCal == lastDayNum + 1)                                                    // if it is greater than lastDayOfMonth
            firstDayOnCal = 1;                                                                    // go to 1, for the first day of monthShown 
            this.daysS[0][i].dateString = this.datePipe.transform(this.daysS[0][i].date, 'yyyy-MM-dd'); 
        }

      } 
                                                                                   // end of first week generation
    if (dowFD == 0 || dowFD == 6)
      tmpDate = firstDateOnCalendar;
    /*******   make the rest of the weeks on the calendar.  */  
    var firstTime = 0;
    for (let i=1; i < 6; i++){                                                              // max of 4 more weeks in calendar
      for (let j= 0; j < 5; j++) {                                                          // the days of each week
        let dayNum = tmpDate.getDay();                                                      // get dayNum of week, this will be Saturday 
        if (dayNum == 5  && firstTime++ == 0 && tmpDate.getDate() < 6)  {                                             // check if it is Friday 
          console.log("247 dayNum is %o tmpDate is %o", dayNum, tmpDate);
          tmpDate.setDate(tmpDate.getDate() + 3);                                           // increment 2 days to get to Monday.  

        }

        if (dayNum == 6 )    {                                                               // check if it is Saturday,  
            tmpDate.setDate(tmpDate.getDate() + 2);                                           // increment 2 days to get to Monday. 
        }

        if (!this.daysS[i])                                                                 //  if array row has not been defined
            this.daysS[i] = Array();  
            this.daysS[i][j] = <dateBox>{};                                                 // define an instance of the daysS interface
            this.daysS[i][j].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate());    // put date in daysS dataStructure.
            this.daysS[i][j].dateString = this.datePipe.transform(this.daysS[i][j].date, 'yyyy-MM-dd');
            this.daysS[i][j].dayNumber = tmpDate.getDate();
            this.daysS[i][j].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";     
            tmpDate.setDate(tmpDate.getDate() + 1);                                             // increment the date
      }
    }
}                                                                                         ////////  end of the nextMonth to build the monthDisplay 
isUserDutyTaker(){
  if (!this.loggedInUserKey){
    return false;
  }
  return true;
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


isLoggedInUser(n){                                                                      // show the loggedInUser's duties in red
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
console.log("takeAduty");
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
setPhysicsMonthlyDuties(val){
    this.physicsMonthlyDuties = val['data'];   
    this.physicsDutiesClass = [];
  for (let entry of val['PhysicsDuties']) {
    if (this.count == 1){                                                            // drawing the Proton Calendar
      if (entry.CalNum == 2)
        this.physicsDutiesClass.push({'dutyId': entry.Idx, 'dutyName':entry.name, 'timeSpan':entry.timeSpan })
    }  
    else  { 
      if (entry.CalNum == 1)
      this.physicsDutiesClass.push({'dutyId': entry.Idx, 'dutyName':entry.name,'timeSpan':entry.timeSpan  })
      }
    }
    if (val['loggedInUserKey'])      {                                                 // the data to the monthly schedule
      this.loggedInUserKey = val['loggedInUserKey']                                                       // the userkey to be used for Take-A-Duty      
      this.helpArray = ['To take a duty, click on the on the name of physicists who has that duty'];      
    }                            
    if (val['loggedInUserLastName'])                                             // the userkey to be used for Take-A-Duty
      this.loggedInUserLastName = val['loggedInUserLastName']
    this.physicsDuties = Array();      
    if (val['PhysicsDuties'])  
      this.physicsDuties= val['PhysicsDuties'];                                       // the userkey to be used for Take-A-Duty
    console.log('226 loggedInUserkey is' + this.loggedInUserKey + 'lastName' + this.loggedInUserLastName) 
    console.log("310  physicsDutyClass is %o", this.physicsDutiesClass)
  }
  getDutyClass(dName){
    if (dName){
      if (dName.indexOf('Morning A') !== -1)
        return "MorningA-IORT";
    if (dName.indexOf('Morning B') !== -1)
        return "MorningB";
    if (dName.indexOf('Evening A') !== -1)
        return "EveningA";
    if (dName.indexOf('Evening B') !== -1)
        return "EveningB";    
    if (dName.indexOf('Float1') !== -1)
        return "Float1";
    if (dName.indexOf('Float2') !== -1)
        return "Float2";    
    if (dName.indexOf('ProtonAM') !== -1)
        return "ProtonAM";   
    if (dName.indexOf('ProtonPM') !== -1)
        return "ProtonPM";         
      }
   

  }

}

   






