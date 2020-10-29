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
  multParams: any;

  constructor(
    private activatedRoute: ActivatedRoute, private genEditSvce: GenEditService
     ){  }

  ngOnInit(){
    this.activatedRoute                                             // point to the route clicked on
      .queryParams                                                    // look at the queryParams
      .subscribe(queryParams => {   
        this.qParams = queryParams;
        this.genEditSvce.setPlatform();                     // switch between BB and 242 databases. 
      });
      console.log(" myDuties %o ", this.qParams);
      const s = 'REST_GET.php?action=getMyDuties&userid=' + this.qParams['userid'];
      this.genEditSvce.genGet(s).subscribe(
        (res) => {
          this.setMyDuties(res);
        },
        err => {
          console.log("error 223");
          console.log(err);
        }
      );
      /********  test for multGET          
    const mP = <dB_multGETparams>  {
      action:'multGet',
      tableName:'PhysicsDuty',
      getColNames:['Idx','name','timeSpan','nomOrder'],
      whereColNames: ['Idx', 'name'],
      whereColVals:['3','ProstateImplants']
    }
    this.genEditSvce.multGet(mP).subscribe(
      (res)=> {
        this.multParams = res;
        console.log("47  multGer %o", res);
      }
    );
    */
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
    unsorted() { }                                                    // used to keyvalues: unsorted 

}
