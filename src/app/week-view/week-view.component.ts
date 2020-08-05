import { FiveDayCalService } from './../five-day-cal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GenEditService } from '../gen-edit.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {
  testVar: any;
  calHeadings: any;
  constructor(private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private fiveDayCalSvce: FiveDayCalService

  ) { }

  ngOnInit() {
    this.testVar = this.fiveDayCalSvce.test();
    const monDate = this.fiveDayCalSvce.makeWeek(0);
    this.calHeadings = [{}];
    this.fiveDayCalSvce.makeWeek(1);
    console.log ("dS is %o", this.fiveDayCalSvce.dS);
  }
}
