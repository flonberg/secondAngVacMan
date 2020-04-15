import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from './window.provider';
import { Location } from '@angular/common';
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
export interface dB_POSTparams {
  tableName: string,
  whereColName: string,
  whereColVal: string,
  editColNames: string[],
  editColVals: string[]
}
export interface SinsertParams {
  tableName: string;
  colName: string[];
  colVal: string[];
}
@Injectable({
  providedIn: 'root'
})
export class GenEditService implements OnInit {
  url: string;
  urlBase: string;
  platform: string;
  host:string;
  dBhost:string;
  angularRoute: String;
  userid: String;
  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window,
  private loc: Location
    ) { 
      
    }
  ngOnInit(){
    this.angularRoute = this.loc.path();
    
//    const domainAndApp = url.replace(angularRoute, '');
 //   console.log('angularRouts ' + angularRoute + 'url' + url );
  }  
  setUserId(s){               // get the userid from the router.queryParams.
    this.userid = s;
  }
   
   setPlatform(s){             // set the dB host for the localhost version      
    this.angularRoute = this.loc.path();    
    const wlr = window.location.href;       
    if (window.location.href.indexOf('localhost') !== -1 || window.location.href.indexOf('blackboard') !== -1 ){
      this.urlBase = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/';      //get data from BB  for localhost or BB 
    }   
    if ( window.location.href.indexOf('whiteboard') !== -1 ){
      this.urlBase = 'https://whiteboard.partners.org/esb/FLwbe/AngProd/';      //get data from BB  for localhost or BB 
    }    
    console.log('AngularRoute is  1129' + this.angularRoute); 
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
    getTAs(startDateString, endDateString){
      const url = this.urlBase + 'getVacsBB.php?start=' 
      + startDateString + '&end=' + endDateString + '&userid=' + this.userid + '&host=localhost';
      console.log('getTa url is ' + url);
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
