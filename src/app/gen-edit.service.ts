import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SeditParams {
  tableName: string;
  whereColName: string;
  whereColVal: string;
  editColName: string;
  editColVal: string;
  newVal: string;
  who: String;
}
export interface SinsertParams {
  tableName: string;
  colName: string[];
  colVal: string[];
}
@Injectable({
  providedIn: 'root'
})
export class GenEditService {
  url: string;
  platform: string;
  constructor(private http: HttpClient) {

   }
   setPlatform(s){
     this.platform = s;
     console.log("setting platform  = "  + s);
   }
   //////  does update of SINGLE column. Params in POST. Params are tableName, editColName, editColVal, whereColName, whereColVal  \\\\\
    update(dBParams){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTupdatePOST.php';
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
       //   console.log("POST call", val);
        });
    }
    //////  Inserts a single record. Uses : params.tablename= string; params.colName=[]; params.colVal = []; 
    insert(dBParams){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTinsertPOST.php';
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
       //   console.log("POST call", val);
        });
    }
    /////  params: params.tablename= string; params.editColNames=[]; params.editColVals = []; 
    genDB_POST(dP){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTgenDB_POST.php?platform=' + this.platform;
      this.http.post(url, JSON.stringify(dP)).subscribe(
        (val) => {
       //   console.log('POST call', val);
        });
    }
    genGetPhysicsMonthlyDuties(startDateForGettingDataString, userid){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/getPhysicsDuties.php?dateSince=' 
      + startDateForGettingDataString + '&userid=' + userid +'&platform=' + this.platform;
      return this.http.get(url);
    }
    ///////  test of get from ION  \\\\\\\\\\
    IONgetterCustom(){
      const url = "https://ion.mgh.harvard.edu/cgi-bin/imrtqa/TESTgetter.php";
    }
  }
