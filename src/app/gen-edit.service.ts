import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from './window.provider';
import { Observable } from 'rxjs';

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
  dBhost:string;
  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window
    ) { }

   setPlatform(s){             // set the dB host for the localhost version                        
     console.log("window " + this.window.location.pathname);
      this.dBhost = 'prod';
      if (this.window.location.pathname.indexOf('prod') !== -1 ){
        this.dBhost = 'prod';
      }
      if (this.window.location.pathname.indexOf('dev') !== -1 ){
        this.dBhost = 'dev';
      }
    console.log("setting hhost is  5.15 " + this.dBhost);
    return this.host;                           // for time-line which has its own REST
    }
    
    getTAs(startDateString, endDateString, userid, platform){
      const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/getVacsBB.php?start=' 
      + startDateString + '&end=' + endDateString + '&userid=' + userid + '&platform=' + platform;
      return this.http.get(url);
    }  

  
  genRest(dBParams, scriptName, hostName){
    const url = 'http:/' + hostName + scriptName;
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
      + startDateForGettingDataString + '&userid=' + userid +'&platform=' + this.host;
      return this.http.get(url);
    }
    ///////  test of get from ION  \\\\\\\\\\
    IONgetterCustom(){
      const url = "https://ion.mgh.harvard.edu/cgi-bin/imrtqa/TESTgetter.php";
    }
  }
