import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from './window.provider';

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
  host:string;
  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window
    ) {

   }
   setPlatform(s){
     this.platform = s;
     this.host = 'dev';                                          // set the dB host for the localhost version
     console.log("window " + this.window.location.hostname);
     // set the 
     if ( this.window.location.hostname.indexOf('host') !== -1 ){
       this.host = 'dev';
     }
     else {
     this.window.location.hostname.indexOf('dev') !== -1 ? this.host = 'dev' : this.host='prod';
     }
    
     console.log("setting platform  = "  + this.platform + 'host is ' + this.host);
   }
   //////  does update of SINGLE column. Params in POST. Params are tableName, editColName, editColVal, whereColName, whereColVal  \\\\\
    update(dBParams){

      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTupdatePOST.php?host='+ this.host;
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
       //   console.log("POST call", val);
        });
    }
    //////  Inserts a single record. Uses : params.tablename= string; params.colName=[]; params.colVal = []; 
    insert(dBParams){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTinsertPOST.php?host=' + this.host;
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
       //   console.log("POST call", val);
        });
    }
    /////  params: params.tablename= string; params.editColNames=[]; params.editColVals = []; 
    genDB_POST(dP){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTgenDB_POST.php?platform=' + this.host;
      console.log("genBDPosrt url is " + url);
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
