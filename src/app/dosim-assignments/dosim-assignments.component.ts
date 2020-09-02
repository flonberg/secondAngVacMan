import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenEditService } from '../gen-edit.service';

@Component({
  selector: 'app-dosim-assignments',
  templateUrl: './dosim-assignments.component.html',
  styleUrls: ['./dosim-assignments.component.css']
})
export class DosimAssignmentsComponent implements OnInit {
  dosimAssignments: any;
  constructor( private http: HttpClient, private genEditSvce: GenEditService,  ) { }

  ngOnInit() {
    this.getDosimAssignments();
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
}
