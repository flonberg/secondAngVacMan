import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenEditService } from '../gen-edit.service';
import { DatePipe, KeyValue } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dosim-assignments',
  templateUrl: './dosim-assignments.component.html',
  styleUrls: ['./dosim-assignments.component.css']
})
export class DosimAssignmentsComponent implements OnInit {
  dosimAssignments: any;
  qP: any;
  userid: any;

  constructor( private http: HttpClient, private genEditSvce: GenEditService, 
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.getDosimAssignments();
    this.userid='napolitano';
    this.activatedRoute.queryParams.subscribe(
      queryParams => {
        this.setQueryParams(queryParams);
      }
    )
    this.userid = this.activatedRoute.snapshot.params.valueOf();
    console.log(" 29 userid %o", this.userid);
  }
  setQueryParams(qP){
    this.userid = qP.userid;
    console.log( "28 fffffff userid is " + this.userid);
  }
  getDosimAssignments(){
    this.genEditSvce.genGet('REST_GET.php?action=getDosimAssign').subscribe(
      (res) => {
        this.setDosimAssign(res);
      },
      err => {
        console.log("error 223");
        console.log(err);
      }
    );
  }
  setDosimAssign(res){
    this.dosimAssignments = res;
    console.log("dosimAssitn %o", this.dosimAssignments);
  }
  setClass = {
    "Plan Write-up": "PlanWrClass",
    "Physics Plan Check": "PhysPlanClass",
    "IMRT QA": "IMRTQAClass",
    "Ready for MD": "RforMDClass",
    "Pre-Treatment QA": "preTreatClass",
    "Treatment Planning": "TPClass",
    "Cleared for Treatment": "CforClass",
    "MD Approved": "MdApprovedClass",
    "Chart Rounds": "MdApprovedClass",
  }
  getStatClass(s){
    return this.setClass[s];
  }
  /*
  getStatClass($s)
  {
        if (strcmp($s, "Plan Write-up") == 0)
                return "PlanWrClass";
        if (strcmp($s, "Physics Plan Check") == 0)
                return "PhysPlanClass";
        if (strcmp($s, "IMRT QA") == 0)
                return "IMRTQAClass";
        if (strcmp($s, "Ready for MD") == 0)
                return "RforMDClass";
        if (strcmp($s, "Pre-Treatment QA") == 0)
                return "preTreatClass";
        if (strcmp($s, "Treatment Planning") == 0)
                return "TPClass";
        if (strcmp($s, "Cleared for Treatment") == 0)
                return "CforTClass";
        if (strcmp($s, "MD Approved") == 0)
                return "MdApprovedClass";
        if (strcmp($s, "Chart Rounds") == 0)
                return "MdApprovedClass";
  }
*/
}
