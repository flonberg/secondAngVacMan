import { editParam } from './dose-fx/dose-fx.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface editParam{                                                   // colName and editValue are an array 
  colName: string;
  editVal: string;
}

export interface dBP {
  tableName: string;
  docidx: number
  editParams: editParam[]
}

@Injectable({
  providedIn: 'root'
})

export class DoseFxService {
  dBPm: dBP;

  constructor(private http: HttpClient) { }

  setDBP(tableName, docidx){
    const dBPm: dBP = {
      tableName: tableName,
      docidx: docidx,
      editParams: []
    }
  }
  setColName(s){
    this.dBPm.editParams[0].colName = s;
  }
  setEditVal(s){
    this.dBPm.editParams[0].editVal = s;
  }

  update(dBParams){
    console.log('editPatams ', dBParams);
    const url = 'https://whiteboard.partners.org/esb/FLwbe/REST/AngularRest/matDemoRest.php';
    this.http.post(url, JSON.stringify(dBParams)).subscribe(
      (val) => {
        console.log("POST call", val);
      });
  }
  getData(docidx, tableName){
    const url = 'https://whiteboard.partners.org/esb/FLwbe/REST/AngularRest/matDemoGetREST.php?tableName='+ tableName +'&docidx='+ docidx;
    return this.http.get(url);

  }
}
