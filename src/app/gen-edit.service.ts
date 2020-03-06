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
  constructor(private http: HttpClient) {
   }

    update(dBParams){
      console.log('editPatams ', dBParams);
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTupdatePOST.php';
  //    const url = 'http://blackboard-dev.partners.org/dev/RESTupdatePOST.php';
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
          console.log("POST call", val);
        });
    }
    insert(dBParams){
      console.log('inserParams ', dBParams);
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTinsertPOST.php';
  //    const url = 'http://blackboard-dev.partners.org/dev/RESTinsertPOST.php';
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
          console.log("POST call", val);
        });
    }
   
  }
