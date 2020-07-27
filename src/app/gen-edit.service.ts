import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from './window.provider';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
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
  action: string,
  tableName: string,
  getColName: string[],
  whereColName: string[],
  whereColVal: string[],
}
export interface dB_SimpleGETparams {
  action: string,
  tableName: string,
  getColName: string,
  whereColName: string,
  whereColVal: string,
}

export interface dB_POSTparams {
  action: string,
  tableName: string,
  whereColName: string[],
  whereColVal: string[],
  editColNames: string[],
  editColVals: string[],
  userid: string,
  insert?: boolean ,
  needEmail?: string,
  email?: {
    mailToAddresses:string[],
    msg: string,
    subject: string
  };                                     // INSERT edited ROW if NOT found
}
export interface emailParams {
  action: string,
  subject: string,
  addresses: string[],
  msg:string
}
export interface SinsertParams {
  tableName: string;
  colName: string[];
  colVal: string[];
  action: string;
  userid: string;
  needEmail?: string;
  email?: {
    mailToAddresses:string[],
    msg: string,
    subject: string
  };   
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
  notice:any;
  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

  setUserId(s){               // get the userid from the router.queryParams.
    this.userid = s;
  }
   
  setPlatform(){             // set the dB host for the localhost version      
  //  this.angularRoute = this.loc.path();    
    const wlr = window.location.href;       
    console.log("window.location.herf is " + window.location.href);
  //  if (window.location.href.indexOf('localhost') !== -1 || window.location.href.indexOf('blackboard') !== -1 ){
 //     this.urlBase = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/';      //get data from BB  for localhost or BB 
 //   }   
    if (window.location.href.indexOf('localhost') !== -1 || window.location.href.indexOf('blackboard') !== -1 ){
      this.urlBase = 'http://blackboard-dev.partners.org/dev/FJL/AngProd/';      //get data from BB  for localhost or BB 
    }   
    if ( window.location.href.indexOf('whiteboard') !== -1 ){
      console.log(" dectected whiteboard so setting urlBase to whitboard");
      this.urlBase = 'https://whiteboard.partners.org/esb/FLwbe/AngProd/';      //get data from BB  for localhost or BB 
    }    
    if ( window.location.href.indexOf('cat') !== -1 ){
      console.log(" dectected balckcat so setting urlBase to whitboard");
      this.urlBase = 'https://blackcat.partners.org/dev/FJL/AngProd/';      //get data from BB  for localhost or BB 
    }    
    return this.host;                           // for time-line which has its own REST
    }
    checkIfNoticeNeeded(name, modalID){                                             // The NoticeModal is used to inform of changes
      const getParams = <dB_SimpleGETparams>{                               // set the parameters for the genDB_GET interface
        action:'simpleGet',
        tableName:'notice',
        whereColName:'UserId',
        whereColVal: this.userid,                                  // the UserId of the loggedInUser
        getColName:name, 
        };
        console.log("166");
      this.simpleGet(getParams).subscribe( val=>{         // get the datum from the notice table
        this.notice = val;   
        console.log("169  notice is  %o", this.notice);                                        // save the resule
        if (this.notice &&  this.notice[name]== 0)          // it r 0
         document.getElementById('noticeModalComponent').style.display = "block";     // sNEED VAR = MODAL ID 
        if (!this.notice ) {         // it NOT FOUND or 0
          document.getElementById('noticeModalComponent').style.display = "block";  
          const insertP = <SinsertParams>{};                                // create instance of interface
          insertP.tableName = 'notice';
          insertP.action = 'insertRecGen';
          insertP.colName  = ['vacMan', 'UserId'];  // names of columns to INSERT
          insertP.colVal = ['0',<string>this.userid]
          this.genPOST(insertP)
          .subscribe(                                          // can't subscribe to POST REST calls ?????
          (response) => {
            ;
          })
        }
      });
    }  
  getFromFile(){
    if (!this.urlBase){           
      this.setPlatform();                   // sets the platform to BB or 242
    }
    const url2 = this.urlBase + 'REST_GET.php?action=getFromFile';
    console.log('getTa url is getFromFile' + url2);
    return this.http.get(url2);
  }  
  simpleGet(p){
    var i = 0;
    var getStr = "";
    console.log("103 property %o", p);
    for (const property in p) {
    //  if (i++ == 0)
     //   getStr += "?"+`${property}`+"="+`${p[property]}`;
    //  elset
        getStr += "&"+`${property}`+"="+`${p[property]}`;
    }
    //const url = this.urlBase + "RESThub.php?dataS=getSimple"+getStr;
    const url = this.urlBase + "REST_GET.php?dataS=getSimple" + getStr;
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


  getLastIdx(){
    const url2 = this.urlBase + 'REST_GET.php?action=getLastIdx';
    console.log('getMyDuties url is ' + url2);
    return this.http.get(url2);
    }
  getMyDuties(UserId){
    if (!this.urlBase){           
      this.setPlatform();                   // sets the platform to BB or 242
    }
    const url2 = this.urlBase + 'REST_GET.php?action=getMyDuties&userid=' + UserId;
    console.log('getMyDuties url is ' + url2);
    return this.http.get(url2);
  }
  getTAs(){
      if (!this.urlBase){           
        this.setPlatform();                   // sets the platform to BB or 242
      }
      const url2 = this.urlBase + 'REST_GET.php?action=getTAs&userid=' + this.userid ;
      console.log('getTa url is 5-21' + url2);
      return this.http.get(url2);
    } 
  getMyDutyies(UserId){

  }  
  getPMDs(userid){
      if (!this.urlBase){           
        this.setPlatform();                   // sets the platform to BB or 242
      }
      const url2 = this.urlBase + 'REST_GET.php?action=getPMDs&userid=' + userid ;
      console.log('getTa url is 5-21' + url2);
      return this.http.get(url2);
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
      //const url2 = this.urlBase + 'RESThub.php?dataS=getPhysicsMonthlyDuties&userid=' + userid;
      console.log("getEdit 115 url is " + url2);
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
  sendEmail(emailParams){
    const url2 = this.urlBase + 'RESTgenDB_POST.php';
    return this.http.post(url2, JSON.stringify(emailParams), { responseType: 'text' as 'json' });
  }
  genPOST(dBParams){
    const url2 = this.urlBase + 'RESTgenDB_POST.php';
    return this.http.post(url2, JSON.stringify(dBParams), { responseType: 'text' as 'json' });
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
