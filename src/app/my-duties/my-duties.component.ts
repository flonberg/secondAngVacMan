import { Component, OnInit } from '@angular/core';
import { GenEditService } from '../gen-edit.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-duties',
  templateUrl: './my-duties.component.html',
  styleUrls: ['./my-duties.component.css']
})
export class MyDutiesComponent implements OnInit {
  qParams: any; // Used as a param for REST getDuties. 
  myDuties: any;

  constructor(
    private activatedRoute: ActivatedRoute, private genEditSvce: GenEditService
     ){ }

  ngOnInit(){
    this.activatedRoute                                             // point to the route clicked on
      .queryParams                                                    // look at the queryParams
      .subscribe(queryParams => {   
        this.qParams = queryParams;
        this.genEditSvce.setPlatform();                     // switch between BB and 242 databases. 
      });
      console.log(" myDuties %o ", this.qParams);
      this.genEditSvce.getMyDuties(this.qParams['userid']).subscribe(
        (res) => {
          this.setMyDuties(res);
        },
        err => {
          console.log("error 223");
          console.log(err);
        }
      );
    }
    setMyDuties(p){
      this.myDuties = p;
    
    }

}
