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
  constructor(private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private fiveDayCalSvce: FiveDayCalService

  ) { }

  ngOnInit() {
    this.testVar = this.fiveDayCalSvce.test();
  }

}
