import { FiveDayCalService } from './../five-day-cal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GenEditService, dB_SimpleGETparams } from '../gen-edit.service';

import { CommonModule } from '@angular/common';
import {NgStyle} from "@angular/common";

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
  physicsRegularDuties: any;
  regularDuties: any;
  fromION: any;
  todayString; String;
  todayColor: any;
  defaultColor: any;
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
   this.todayColor = "color:red";
   this.defaultColor = "color:gray";
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
  isTodayColor(s): any {
    if (s == this.todayString){
      return "todayClass" ;
    }
    else
      return  "defaultClass";
  }
  page(m){
    console.log("page 67 %o", m);
    if (m.id)
      window.open('http://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&ACTION=PAGE&ID=' 
      + m.id + '  , _blank');
      return;
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
    console.log("87 val %o ", val);
    this.physicsMonthlyDuties = val['data'];   
    this.physicsRegularDuties = val['RegularDuties']
    console.log("241 physicsMothlyDuties %o", this.physicsMonthlyDuties);
    console.log("241 physicsRegularDuties %o", this.physicsRegularDuties);
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
   
    this.WeekDutyNames = dN;
    console.log("WeekdutyNames is %o", this.WeekDutyNames);
  }
  setRegDutyNames(dN){
    console.log("RegDutyNames is %o", dN);
    this.RegDutyNames = dN;
  }
  shift(n){
    this.advance += n;
  }

}
