import { Component, OnInit } from '@angular/core';
import { GenEditService, dB_multGETparams } from '../gen-edit.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-duties',
  templateUrl: './my-duties.component.html',
  styleUrls: ['./my-duties.component.css']
})
export class MyDutiesComponent implements OnInit {
  qParams: any; // Used as a param for REST getDuties. 
  myDuties: any;

  dB_mG : dB_multGETparams = {
    action:'multGet',
    tableName:'',
    getColName:[],
    whereColName: [],
    whereColVal:[]
  }


  
  constructor(
    private activatedRoute: ActivatedRoute, private genEditSvce: GenEditService
     ){ 
       this.genEditSvce=genEditSvce;
     }

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
    const mP : dB_multGETparams = {
      action:'multGet',
      tableName:'PhysicsDuty',
      getColName:['Idx','name','timeStpan','nomOrder'],
      whereColName: ['Idx', 'Name'],
      whereColVal:['3','ProstateImplants']
    }
    this.genEditSvce.multGet(mP).subscribe(
      (res)=> {
        console.log("multGer %o", res);
      }
    );
  }

    setMyDuties(p){
      this.myDuties = p;
      console.log("myDuties are %o", this.myDuties);
    
    }
    isOdd(n){
      if (n % 2 == 0)
        return 'even';
      else 
        return 'odd';   
    }

}
