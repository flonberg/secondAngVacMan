import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface editParams {
  tableName: string;
  whereColName: string;
  whereColVal: string;
  editColName: string;
  newVal: string;
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
    const url = 'http://blackboard-dev.partners.org/dev/RESTupdatePOST.php';
    this.http.post(url, JSON.stringify(dBParams)).subscribe(
      (val) => {
        console.log("POST call", val);
      });
  }
}
