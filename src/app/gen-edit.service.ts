import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from './window.provider';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  action: String,
  tableName: String,
  getColName: String,
  whereColName: String,
  whereColVal: String,
}
export interface dB_multGETparams {
  action: String,
  tableName: String,
  getColNames: String[],
  whereColNames: String[],
  whereColVals: String[],
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
export interface InsertParams {
  action: String,
  tableName: String,
  colName: String[],
  colVal: String[]
}
export interface SinsertParams {
  action: String;
  tableName: String;
  colName: String[];
  colVal: String[];
  userid: String;
  needEmail?: String;
  email?: {
    mailToAddresses:String[],
    msg: String,
    subject: String
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
  emailStage; String;


  userid: String;
  notice:any;
  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

  setUserId(s){               // get the userid from the router.queryParams.
    this.userid = s;
  }    

  writeLog(s){
    var r = Math.random();
    this.setPlatform();
    s += "\r\n userid is " +  this.userid;
      const url2 = this.urlBase + 'logREST.php?str=' + s + "&r=" + r;
    console.log( url2);
    return this.http.get(url2);
  }
  goHome(u){
    window.location.href = 'https://ion.mgh.harvard.edu/cgi-bin/main.pl?userid=' + u;
  }
 
  setPlatform(){             // set the dB host for the localhost version                                                     // the default. 
    this.emailStage = "Dev";                                                   // send ALL emails to flonberg for forwarding
    if (window.location.href.indexOf('localhost') !== -1 || window.location.href.indexOf('blackboard') !== -1 ){
      this.urlBase = 'http://blackboard-dev.partners.org/dev/FJL/AngProd/';      //get data from BB  for localhost or BB 
    // this.urlBase = 'https://whiteboard.partners.org/esb/FLwbe/AngProd/';     // might want to work with PROD data 
    }   
    if ( window.location.href.indexOf('whiteboard') !== -1 ){                   // PROD. 
      this.urlBase = 'https://whiteboard.partners.org/esb/FLwbe/AngProd/';      //get data from BB  for localhost or BB 
    }    
    if ( window.location.href.indexOf('cat') !== -1 ){
      this.urlBase = 'https://blackcat.partners.org/dev/FJL/AngProd/';      //get data from BB  for localhost or BB 
    }    
    return this.host;                           // for time-line which has its own REST
    }
  checkIfNoticeNeeded(name){                                             // The NoticeModal is used to inform of changes
      const getParams = <dB_SimpleGETparams>{                               // set the parameters for the genDB_GET interface
        action:'simpleGet',
        tableName:'notice',
        whereColName:'UserId',
        whereColVal: this.userid,                                  // the UserId of the loggedInUser
        getColName:name, 
        };
    }  
  getFromFile(){
    if (!this.urlBase){           
      this.setPlatform();                   // sets the platform to BB or 242
    }
    const url2 = this.urlBase + 'REST_GET.php?action=getFromFile';
    console.log('getTa url is getFromFile' + url2);
    return this.http.get(url2);
  }  
  /*********  get using selStr from GET param  */
  getWithSelString(arg){
    var url = this.urlBase + "REST_GET.php?action=getWithSelString&selStr=" + arg['selStr'];
    if (arg['key'])
     url += "&key=" + arg['key'];
    console.log("getWithSelString URL is " + url);
    return this.http.get(url) 
  }
  /*******  get with param list and single WHERE conditon */
  simpleGet(p){
    var getStr = "";
    for (const property in p) {
        getStr += "&"+`${property}`+"="+`${p[property]}`;
    }
    const url = this.urlBase + "REST_GET.php?dataS=getSimple" + getStr;
    return this.http.get(url) 
  }  
  multGet(p){
    const jS = JSON.stringify(p);
    const url = this.urlBase + "REST_GET.php?action=multGet&jG=" + jS;
    console.log("167 multGet url is  " + url);
    return this.http.get(url) 
  }
  getPhysicistFromION(){

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

genGet(s){
  if (!this.urlBase)          
    this.setPlatform();                   // sets the platform to BB or 242
  const url2 = this.urlBase + s
  console.log('196  setPlatForm url2 is ' + url2);
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
    emailParams['debug'] = '1';
    const url2 = this.urlBase + 'RESTgenDB_POST.php';
    console.log(" 248  senEmail %o", emailParams);
    return this.http.post(url2, JSON.stringify(emailParams), { responseType:  'json' });
  }
  genPOST(dBParams){
    dBParams['emailStage'] = this.emailStage;
    const url2 = this.urlBase + 'RESTgenDB_POST.php';
    console.log("gen_edit 229  url is " + url2);
    return this.http.post(url2, JSON.stringify(dBParams), { responseType:  'json' });
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
 /*
  getTAs(){
      if (!this.urlBase){           
        this.setPlatform();                   // sets the platform to BB or 242
      }
      const url2 = this.urlBase + 'REST_GET.php?action=getTAs&userid=' + this.userid ;
      console.log('getTa url is 5-21' + url2);
      return this.http.get(url2);
    } 
    */
/*
  getPMDs(userid){
      if (!this.urlBase){           
        this.setPlatform();                   // sets the platform to BB or 242
      }
      const url2 = this.urlBase + 'REST_GET.php?action=getPMDs&userid=' + userid ;
      console.log('getTa url is 5-21' + url2);
      return this.http.get(url2);
    } 
    */
     /*
  getPhysicsMonthlyDuties(startDateString, userid){
      if (!this.urlBase){
        this.setPlatform();
      }
      const url2 = this.urlBase + 'getPhysicsDuties.php?dateSince=' + startDateString + '&userid=' + userid;
      //const url2 = this.urlBase + 'RESThub.php?dataS=getPhysicsMonthlyDuties&userid=' + userid;
      console.log("getEdit 115 url is " + url2);
      return this.http.get(url2)
    } 
    */
   /*
  getLastIdx(){
    const url2 = this.urlBase + 'REST_GET.php?action=getLastIdx';
    console.log('getMyDuties url is ' + url2);
    return this.http.get(url2);
    }
 */