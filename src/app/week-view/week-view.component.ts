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
  constructor(private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private fiveDayCalSvce: FiveDayCalService

  ) { }

  ngOnInit() {
   this.makeWeek(this.advance);
  }
  makeWeek(advance){
    this.fiveDayCalSvce.makeWeek(1);
    this.calHeadings = this.fiveDayCalSvce.dS;
    this.getDutyNames();
  }
  getDutyNames(){
     this.genEditSvce.getWithSelString("SELECT * FROM PhysicsDuty ORDER bY nomOrder")
     .subscribe(                                          
      (response) => {
        this.setDutyNames(response);
      })   
  }
  setDutyNames(dN){
    console.log("dutyNames is %o", dN);
  }
}
