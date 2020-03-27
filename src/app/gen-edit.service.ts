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
   }
    update(dBParams){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTupdatePOST.php';
  //    const url = 'http://blackboard-dev.partners.org/dev/RESTupdatePOST.php';
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
       //   console.log("POST call", val);
        });
    }
    insert(dBParams){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTinsertPOST.php';
  //    const url = 'http://blackboard-dev.partners.org/dev/RESTinsertPOST.php';
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
       //   console.log("POST call", val);
        });
    }
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
      console.log("MonthView url is " + url);
      return this.http.get(url);
    }
   
  }
