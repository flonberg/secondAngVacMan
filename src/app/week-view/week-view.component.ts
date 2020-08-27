import { FiveDayCalService } from './../five-day-cal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GenEditService, dB_SimpleGETparams } from '../gen-edit.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {
  calHeadings: any;
  advance = 0;
  WeekDutyNames: any;
  RegDutyNames: any;
  physicsMonthlyDuties: any;
  regularDuties: any;
  fromION: any;
  todayString; String;
  dayNums: String[];
  constructor(private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private fiveDayCalSvce: FiveDayCalService) { }

  ngOnInit() {
   this.makeWeek(this.advance);
   console.log("33   calHeadins %o", this.calHeadings);
   this.getFromION();
   this.getDutyNames();
   this.getDutyOwners();
   this.getRegDutyNames();
   this.getRegularDuties();
   this.dayNums = ['0','1','2','3','4'];
   const todayDate =  new Date();
   this.todayString = todayDate.toISOString().split('T')[0];
  }
  makeWeek(advance){
    this.advance += advance; 
    this.fiveDayCalSvce.makeWeek(this.advance);
    this.calHeadings = this.fiveDayCalSvce.dS;
  }
  isToday(s, i){
    if (s == this.todayString)
      return "todayClass";
    else  
      return "white";  
  }
  isTodayColor(s){
    if (s == this.todayString)
      return "red";
    else  
      return "gray";  
  }
  page(){
    
  }
 
  getFromION(){
    this.genEditSvce.genGet('REST_GET.php?action=RgetJOINFromION').subscribe(
      (res) => {
        this.setFromION(res);
      },
      err => {
        console.log("error 223");
        console.log(err);
      }
    );
  }
  setFromION(res){
    console.log("  43    getFromION %o", res);
    this.fromION = res;
  }
  getDutyOwners(){
  //  this.genEditSvce.getPMDs('fjl3').subscribe(
      this.genEditSvce.genGet('REST_GET.php?action=getPMDs&userid=fjl3' ).subscribe(  
      (res) => {
        this.setPhysicsMonthlyDuties(res);
      },
      err => {
        console.log("error 223");
        console.log(err);
      }
    );
  }
  setPhysicsMonthlyDuties(val){
    this.physicsMonthlyDuties = val['data'];   
    console.log("241 %o", this.physicsMonthlyDuties)
  }
  getRegularDuties(){
    const arg = {'selStr': 'SELECT * FROM PhysicsRegularDuty', 'key':'serviceid'};
    this.genEditSvce.getWithSelString(arg)
    .subscribe(                                          
     (response) => {
       this.setRegDuties(response);
     })   
  }
  setRegDuties(s){
    console.log(" 81   rebDuties %o", s);
    this.regularDuties = s;
  }
  getDutyNames(){
     const arg = {'selStr': 'SELECT * FROM PhysicsDuty WHERE nomOrder > 0  AND nomOrder <=8 ORDER bY nomOrder'}
     this.genEditSvce.getWithSelString(arg)
     .subscribe(                                          
      (response) => {
        this.setDutyNames(response);
      })   
  }
  getRegDutyNames(){
    const arg = {'selStr': 'SELECT * FROM PhysicsDuty WHERE nomOrder > 8 ORDER bY nomOrder'}
    this.genEditSvce.getWithSelString(arg)
    .subscribe(                                          
     (response) => {
       this.setRegDutyNames(response);
     })   
 }
  setDutyNames(dN){
    console.log("dutyNames is %o", dN);
    this.WeekDutyNames = dN;
  }
  setRegDutyNames(dN){
    console.log("RegDutyNames is %o", dN);
    this.RegDutyNames = dN;
  }
  shift(n){
    this.advance += n;
  }

}
