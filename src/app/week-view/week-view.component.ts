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
  physicsMonthlyDuties: any;
  constructor(private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private fiveDayCalSvce: FiveDayCalService) { }

  ngOnInit() {
   this.makeWeek(this.advance);
   this.getFromION();
   this.getDutyNames();
   this.getDutyOwners();
  }
  makeWeek(advance){
    this.advance += advance; 
    this.fiveDayCalSvce.makeWeek(this.advance);
    this.calHeadings = this.fiveDayCalSvce.dS;

  
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
  getDutyNames(){
     this.genEditSvce.getWithSelString("SELECT * FROM PhysicsDuty WHERE nomOrder > 0  ORDER bY nomOrder")
     .subscribe(                                          
      (response) => {
        this.setDutyNames(response);
      })   
  }
  setDutyNames(dN){
    console.log("dutyNames is %o", dN);
    this.WeekDutyNames = dN;
  }
  shift(n){
    this.advance += n;
  }

}
