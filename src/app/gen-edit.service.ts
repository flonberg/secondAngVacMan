import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from './window.provider';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
//import { start } from 'repl';

export interface SeditParams {
  tableName: string;
  whereColName: string;
  whereColVal: string;
  editColName: string;
  editColVal: string;
  newVal: string;
  who: String;
}
export interface dB_GETparams {
  tableName: string,
  getColName: string[],
  whereColName: string[],
  whereColVal: string[],
}

export interface dB_POSTparams {
  tableName: string,
  whereColName: string[],
  whereColVal: string[],
  editColNames: string[],
  editColVals: string[],
  insert?: boolean                                      // INSERT edited ROW if NOT found
}
export interface SinsertParams {
  tableName: string;
  colName: string[];
  colVal: string[];
}
@Injectable({
  providedIn: 'root'
})
export class GenEditService   {
  url: string;
  urlBase: string;
  platform: string;
  host:string;

  userid: String;
  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

  setUserId(s){               // get the userid from the router.queryParams.
    this.userid = s;
  }
   
  setPlatform(){             // set the dB host for the localhost version      
  //  this.angularRoute = this.loc.path();    
    const wlr = window.location.href;       
    console.log("window.location.herf is " + window.location.href);
    if (window.location.href.indexOf('localhost') !== -1 || window.location.href.indexOf('blackboard') !== -1 ){
      this.urlBase = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/';      //get data from BB  for localhost or BB 
    }   
    if ( window.location.href.indexOf('whiteboard') !== -1 ){
      console.log(" dectected whiteboard so setting urlBase to whitboard");
      this.urlBase = 'https://whiteboard.partners.org/esb/FLwbe/AngProd/';      //get data from BB  for localhost or BB 
    }    
    return this.host;                           // for time-line which has its own REST
    }
  simpleGet(p){
    var i = 0;
    var getStr = "";
    for (const property in p) {
    //  if (i++ == 0)
     //   getStr += "?"+`${property}`+"="+`${p[property]}`;
    //  else
        getStr += "&"+`${property}`+"="+`${p[property]}`;
    }
    //const url = this.urlBase + "RESThub.php?dataS=getSimple"+getStr;
    const url = this.urlBase + "RESThub.php?dataS=getSimple" + getStr;
    console.log("76 ffff " + url);
    return this.http.get(url) 
  }  
  genDB_POST(dP){
      if (!this.urlBase){
        this.setPlatform();
      }
      const url2 = this.urlBase + 'RESTgenDB_POST.php';
      console.log("genBDPosrt url 2is " + url2);
      this.http.post(url2, JSON.stringify(dP)).subscribe(
        (val) => {
       //   console.log('POST call', val);
        });
    }
 
  getTAs(startDateString, endDateString){
      if (!this.urlBase){
        this.setPlatform();
      }
      const url = this.urlBase + 'RESThub.php?dataS=getTa&start=' 
      + startDateString + '&end=' + endDateString + '&userid=' + this.userid + '&host=' + this.urlBase;
      console.log('getTa url is 5-21' + url);
      return this.http.get(url);
    } 
  genDB_GET(dP){
      if (!this.urlBase){
        this.setPlatform();
      }
      const url2 = this.urlBase + 'genGETterPOST.php';
      console.log("genBDPosrt url 2is " + url2);
      return this.http.post(url2, JSON.stringify(dP));
    }
  getPhysicsMonthlyDuties(startDateString, userid){
      if (!this.urlBase){
        this.setPlatform();
      }
      const url2 = this.urlBase + 'getPhysicsDuties.php?dateSince=' + startDateString + '&userid=' + userid;
      return this.http.get(url2)
      
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
      const url = this.urlBase + 'RESTinsertPOST.php';
      this.http.post(url, JSON.stringify(dBParams)).subscribe(
        (val) => {
       //   console.log("POST call", val);
        });
    }
    /////  params: params.tablename= string; params.editColNames=[]; params.editColVals = []; \\\\\
      ////// whereColName = [];  whereColVal = [] \\\\\
    /////  Use for EDITing  \\\\\\\\\\\

   /////  params: params.tablename= string; params.editColNames=[]; params.editColVals = []; \\\\
 
    /////  Use for GETting  \\\\\\\\\\\
 
    ///////  test of get from ION  \\\\\\\\\\
    IONgetterCustom(){
      const url = "https://ion.mgh.harvard.edu/cgi-bin/imrtqa/TESTgetter.php";
    }
  }
