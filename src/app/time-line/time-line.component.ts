import { editParam } from './../dose-fx/dose-fx.component';
import { GenEditService, SinsertParams } from './../gen-edit.service';
import { SeditParams } from './../gen-edit.service'
import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { DatePipe } from '@angular/common';
import { resetFakeAsyncZone } from '@angular/core/testing';


declare var require: any;
const vis = require('../../../node_modules/vis/dist/vis.js');

interface newTAparams {
  startDate: string,
  endDate: string,
  reason: number,
  Note: string
}
interface nameToUserId {
  lastName: string;
  userid: string;
}
interface useridToUserkey {
  userid: string;
  userkey: number;
}

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})

export class TimeLineComponent implements OnInit {
  @ViewChild('visjsTimeline', {static: false}  ) timelineContainer: ElementRef;
  tlContainer: any;
  timeline: any;
  data2: any;
  options: {};
  groups: any;
  groupsArray: any;
  contentArray: any;
  redraw: boolean;
  itemNum: string;
  qP: any;                                              // used to receive queryParams
//  idSel: String;
  userkey: number;
  reasons = ["Personal Vacation", "Other", "Meeting"]
  reason: String;
  startDate: FormControl;
  endDate: FormControl;
  reasonFC: FormControl;
  notesFC: FormControl;
  reasonStrings: String[];
  nameList: String[];                                   // list of names appearing in data for forming groups
  userid: String;
  _readonly:boolean;
  showControls: boolean;
  _id: string;
  _content;                                           // store the item.content from click
  drawControls = true;
  isApprover: boolean;
  reasonSelect = '';            
  newTimeAwayBool: boolean = false;  
  saveTimeAwayBool: boolean = false; 
  newTAparams: newTAparams ={
    startDate: '',
    endDate: '',
    reason: -1,
    Note: ''
  }
  nameToUserId: nameToUserId[]; 
  useridToUserkeys: useridToUserkey[];
  startDateEdited: boolean;
  endDateEdited: boolean;
  reasonEdited: boolean;
  localAddId: number;
  seP = <SeditParams>{};  // define instance of SeditParams interface
  _vidx: string;
  endDateString: string;
  startDateString: string;
  endDateShownString: string;
  startDateShownString: string;
  index: number;
  useridP: string;

  constructor( private http: HttpClient, private getEditSvce: GenEditService, 
    private activatedRoute: ActivatedRoute, private datePipe: DatePipe) {
    this.redraw = true;     
    this.showControls = false;                            // *ngIf condition for the controls section
    this._readonly = true;
    this.isApprover = false; 
    this.nameToUserId = [ {lastName: '', userid: ''} ];
    this.useridToUserkeys = [{ userid:'Unknown', userkey: 0 }]
    this.contentArray = [];
    this.localAddId = 34343;
    this.newTimeAwayBool = false;                               // enable editing of existing tAs                        
    this.seP.whereColName = "vidx";
    this.seP.tableName = "vacation3";
    this.index = 0;
  }
  setIndex(n){
    this.index = n;
    console.log("index is " + this.index);
  }

  clicked(ev)
  {                             // this responds to ANY click in the div containing the calendar                                             
    if (document.getElementById("datums2"))     { 
      this._content = document.getElementById("datums2").innerText; 
      if (this._content == "new item")
          this.drawControls = false;
    }
    if (document.getElementById("datums"))     { 
        this._id = document.getElementById("datums").innerText;     // id of the item clickedOn in the DataSet               
        var id = document.getElementById("datums").innerText;        // get the id from the vis click
        console.log("box clicked on");
        if (!this.data2._data[this._id])                           // click was NOT in a tA box;
          return;
        this._vidx = this.data2._data[this._id].vidx;              // store the vidx for editing
        document.getElementById("vidx").innerText = this.data2._data[id].vidx; // store the vidx for DELETE
        this.seP.whereColVal = this.data2._data[this._id].vidx;
        if (this._id !== "datums" )                                // shows user had clicked a box                 
          this.showControls = true;                                 // show editing controls
        }
        console.log("clicked"  + this._id)
    if ( this.data2._data[id] &&  this.data2._data[id].className == this.userid)    // loggedInUser is timeAway owner so make widgets editable
        this._readonly = false;                                     // enable editing
      else                                            
        this._readonly = true;                                      
    if (this.data2._data[id]){                                    // if the timeAway is defined
        this.startDate = new FormControl(new Date(this.data2._data[id].start));   // this is where the value is set
        this.endDate = new FormControl(new Date(this.data2._data[id].end));
        this.reasonFC = new FormControl(this.data2._data[id].reason);
        this.notesFC = new FormControl(this.data2._data[id].note);   
        if (this.data2._data[id].reason || this.data2._data[id].reason == 0 ) {
          this.reasonSelect = this.data2._data[id].reason.toString();     // expecting string 
          this.reasonFC.setValue(this.data2._data[id].reason.toString());  // needed for initial click
          }
        }
    if (this.userid == 'napolitano' )                             // official 'approver'
        this.isApprover = true;  
      /*******************          remove routines  **********************/  
    if (document.getElementById("datums2").innerText.indexOf("remove") !== -1){
        this.data2.remove({id: +document.getElementById("datums").innerText});    // remove the item from the dataSet 
        this.drawControls = false;                                  // turn off the edit Controls. 
        var dParams = {
          "action":"delete",                                            // actions are 'edit', 'insert', 'delete'  
          "tableName":"vacation3", "whereColName":"vidx", "whereColVal": document.getElementById("vidx").innerText,
        }
        var i = 0;
        this.doREST(dParams);
       
      }
      else              /************    Edit Routine  */
        this.updateDB(this.data2._data[id].start, this.data2._data[id].end)
  }

  updateDB(sD, eD){
    console.log("sD is " + sD  + "length is " + sD.length);
      var dParams = {
      "action":"edit",                                            // actions are 'edit', 'insert', 'delete'  
      "tableName":"vacation3", "whereColName":"vidx", "whereColVal": this.data2._data[this._id].vidx,
      "editColNames": ['startDate','endDate'],                    // editColNames and editColVals are one-to-one correspond
      "editColVals": [  this.formatDateYYYymmdd(sD) , this.formatDateYYYymmdd(eD)  ] 
    }
   this.doREST(dParams);
  }
  doREST(dP){
    const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTgenDB_POST.php';
    this.http.post(url, JSON.stringify(dP)).subscribe(
      (val) => {
        console.log("POST call", val);
      });
  }
  formatDateYYYymmdd(d){
    var date = new Date(d)
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var dd = date.getDate();
    //var mS = m < 9 ? "0" + m : m;                                 // put in leading zero if needed
   // var dS = dd < 9 ? "0" + dd : dd;
    var fD = m + "/" + dd + "/" + y;
    return fD;
  }
  ngOnInit() {
    this.activatedRoute                                             // point to the route clicked on 
    .queryParams                                                    // look at the queryParams
    .subscribe(queryParams => {                                     // get the queryParams as Observable
      this.qP = queryParams;
      this.setQueryParams(queryParams);
     console.log(" this.userit " + this.userid);
        this.seP.who = this.userid;
  
        this.getTimelineData2();                                      // get the data from REST database call. 
    })

  }
  setQueryParams(qP){
    if (qP.userid){
      this.useridP = qP.userid;
      this.userid = qP.userid;
    }
    console.log( "setA " + this.userid);
  }
 
  ngAfterViewInit() {
    if (this.timelineContainer  ) {
  
      this.tlContainer = this.timelineContainer.nativeElement;
    }
  }
  
  getTimelineData2() 
  {
   
    let todayDate = new Date();  
    var startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);         // move to first day of current month
    let endDate = new Date();
    let endDateShown = new Date();
    let numWeeks = 6;
    endDateShown.setDate(startDate.getDate() + numWeeks * 7);                                    // set endDate of shown TimeLine for 2 months
    endDate.setMonth(startDate.getMonth() + 4);                                           // set 4 month interval for data collection

    ////////////  go back for DEV only ///////////////
    startDate.setFullYear(startDate.getFullYear() -1) ;                                  // for developement purpose use old data
    endDate.setFullYear(endDate.getFullYear() -1) ;                                      // mm
    endDateShown.setFullYear(endDateShown.getFullYear() -1) ;                            // mm
   
    // let yesterYear = new Date().setFullYear(today.getFullYear() - 1);
    this.startDateString = this.datePipe.transform(startDate,'yyyy-MM-dd');                      // format it for dataBase startDate for getting tAs
    this.endDateString = this.datePipe.transform(endDate,'yyyy-MM-dd');                        // mm for endDate
    this.endDateShownString = this.datePipe.transform(endDateShown,'yyyy-MM-dd');          // start date for opening of tL
    this.startDateShownString = this.datePipe.transform(startDate,'yyyy-MM-dd');   
  
    let url = 'http://blackboard-dev.partners.org/dev/AngVacMan/getVacsBB.php?start='+this.startDateString+'&end='+ this.endDateString +'&userid=' + this.userid;
    console.log(" url is " + url );
    this.http.get(url).subscribe(
      (val) => {
        if (this.index == 0)
          this.data2 = new vis.DataSet(val);  
        else
          this.data2 = Array();     
                                                        // store data in this.data2
        this.setGroups(this.data2);                                                      // make this.nameList a  list of users who have timeAways found
        this.groups = new vis.DataSet([]);    
        let i = 0;                                           // make a dataStruct for the groups
        for( i = 0; i < this.nameList.length; i++){                                   // foreach name found to have tA's
          this.groups.add({id:i, content:this.nameList[i], value:i})                      // add a group
           this.groupsArray[i] = this.nameList[i];
        }
        var top = this.nameList.length * 20;
        var topString = top.toString() +"px";
    //    document.getElementById('controls').style.setProperty("top", topString); 
        this.assignGroups();                                                              // go thru tA's and assign each to proper Group
        this.timeline = new vis.Timeline(this.tlContainer, this.data2, {});
        this.timeline.setOptions(this.options);
        this.timeline.setGroups(this.groups);
        this.timeline.on('select', function ( properties ) {                              // whenever user clicks on a box in the timeLine
          document.getElementById('datums').innerHTML = properties.items  ;   
                     // store the id in the DOM for use by Angular
        });
 
   
      
      function logEvent(event, properties) {
        var log = document.getElementById('log');
        var msg = document.createElement('div');
        document.getElementById('chData').innerHTML = properties.items .innerHTML = 'event=' + JSON.stringify(event) + ', ' +
            'properties=' + JSON.stringify(properties);
        log.firstChild ? log.insertBefore(msg, log.firstChild) : log.appendChild(msg);
      }
    }
    );

    
    this.options = {
  /*   editable: {
        updateTime: true,  // drag items horizontally
      //  updateGroup: true, // drag items from one group to another
        remove: false,       // delete an item by tapping the delete button top right
        add: true,         // add new items by double tapping
      },
      */
      onAdd: function (item, callback){
        document.getElementById('datums').innerHTML = item.group;  
        document.getElementById('datums2').innerHTML = item.start;  
      },
      onRemove: function (item, callback){
        document.getElementById('datums').innerHTML = item.id;  
        document.getElementById('datums2').innerHTML = callback;  
      },
 
  /*
      onAdd: function(item, callback) {
        if (item.content != null) {
       //   var d = this.data;
          const nextDay = new Date(item.start);
          nextDay.setDate(item.start.getDate() + 1);
          item.end = nextDay;
          document.getElementById('datums').innerHTML = item.end;
          callback(item); // send back adjusted item
        }
        else {
          callback(null); // cancel updating the item
        }
      },
      */
     // selectable: true, 
      start: new Date(this.startDateShownString),
//      start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      end: new Date(this.endDateShownString),
//      end: new Date(new Date().getFullYear(), new Date().getMonth()+ 2, 1),

    };
  }                                                           // end of getTimelineData2
  setGroups(s){                                                           // make a list of all user forWhich vacs have been found
    this.nameList = new Array();
    this.groupsArray = new Array();
    for(let i=0; i< s.length; i++){                                        // step thru the data
      if (this.nameList.indexOf(s._data[i].content) < 0) {                 // if name is not already there
        this.nameList.push( s._data[i].content);
        this.nameToUserId[i] = { lastName:s._data[i].content, userid: s._data[i].userkey }
        this.useridToUserkeys[i] = { userid: s._data[i].userid, userkey: s._data[i].userkey } 
        this.contentArray[s._data[i].userkey] = s._data[i].content         // used to get 'content' param to add to dataSet.
      }                     // add name 
    }
    this.nameList.sort();                                                 // alphabetize the nameList
    var index = this.useridToUserkeys.map(function(e) { return e.userid; }).indexOf(<string>this.userid);  //find arrayIndex of userId
    var uKey = this.useridToUserkeys[index].userkey                   // the userKey of the loggedIn user
    this.userkey = this.useridToUserkeys[index].userkey                   // the userKey of the loggedIn user
  }
  assignGroups(){                                                                       // put each tA in proper group. 
    for (var property in this.data2._data ) {
      if (this.data2._data.hasOwnProperty(property)) {
        this.data2._data[property].group = this.nameList.indexOf(this.data2._data[property].content)  // set the correct groupNumber
        if (this.data2._data[property].approved == 1)
          this.data2._data[property].style="color:green";
      }
    }
  }
  clear(){
    console.log("clear " );
  }


  editReason(s, colName){                                                 // used to edit Reason and Note datums   
      var seP = <SeditParams>{};                                          // define instance of SeditParams interface
      seP.who = this.userid;
      seP.whereColName = "vidx";
      seP.tableName = "vacation3";
      if (this.data2._data[this._id] )    
        this.seP.whereColVal = this.data2._data[this._id].vidx;
      this.seP.editColName = colName
      if (s.value)                                                      // if comes from a 'select' widget
        this.seP.editColVal = s.value; 
      if (s.target && s.target.value)  
        this.seP.editColVal = s.target.value; 
      if (s == 1)  
        this.seP.editColVal = '1'; 
      this.getEditSvce.update(this.seP); 
      this.reasonEdited = true;                                         // has to be true to show Save Time Away button
    }   
  editDate(type: string, event: MatDatepickerInputEvent<Date>) {
    var s = this.formatDateForTimeline(event.value)                                // make the string for local update    
            
    if (`${type}` == 'start'){
      this.data2.update({id:this._id, start: s});                       // do the local update
   //   this.data2.update({id:this._id, start: tst});                       // do the local update
      this.seP.editColName = "startDate";    
      this.seP.editColVal = s;    
      console.log("edtied local ");
//      this.seP.editColVal = this.datePipe.transform(newDate, 'yyyy-MM-dd');    
      this.startDateEdited = true;
    }                                                                   // update startDate
    if (`${type}` == 'end') {                                     
      this.data2.update({id:this._id, end: s});                         // update vis DataSet
      this.seP.editColName = "endDate";   
                               // param for dB
      this.seP.editColVal = s;   // mm   
      this.endDateEdited = true;
      console.log("edtied local " + s);
    }   
    this.getEditSvce.update(this.seP);                                  // do the dB edit. 
  // this.timeline.redraw();
  }
  makeDateString(event){
    var editTime = new Date(event.value);                               // date returned by DatePicker
    var month = editTime.getMonth() + 1;                                // get month to assemble to edit
    if (month <= 9){
      <string><unknown>month;
      var monthString  = "0" + month;
    }
    var day = editTime.getDate();                                      // mm
    var year = editTime.getFullYear();                                 // mm
    var s =  month + "-" + editTime.getDate() + "-" + editTime.getFullYear();  
    return s;
  }
  formatDateForTimeline(date){
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
      return year + "-" + month + "-" + day;
//      return [year, month, day].join('-');
  }
  remove(){
    this.data2.remove(this._id);                                         // remove LOCALLY
    this.showControls = false;                                          // turn off controls
    this.seP.editColName = "reasonIdx";                                 // reasonIdx is the DELETE signal column
    this.seP.editColVal = "99";                                         // any smallInt > 0 
    this.getEditSvce.update(this.seP); 
 
  }

  approve(){
    console.log("appreove" + this._id);
    this.data2.update({id:this._id, style: "color:blue"})
    this.data2._data[this._id].approved == 1;
    this.editReason(1, 'approved')
  }
  newTimeAway(){
    this.startDate = new FormControl();  
    this.endDate = new FormControl();  
    this.reasonFC = new FormControl();
    this.notesFC = new FormControl();
  
    this.showControls = true;
    this._readonly = false;
    this._id = '1';
    this.newTimeAwayBool = true;
  }
  saveNewTimeAway(){
    const params = <SinsertParams>{};
    params.tableName = 'vacation3'
    params.colName  = ['startDate', 'endDate' , 'reason', 'note', 'userid'] // names of columns to INSERT
    params.colVal = [this.formatDateForTimeline(this.startDate.value),
      this.formatDateForTimeline(this.endDate.value),this.reasonFC.value,
       this.notesFC.value, 
       this.userkey];

    const content = this.contentArray[this.userkey];                    // build the dataStruct to add to the timeLine DataSet
    const groupNum = this.groupsArray.indexOf(content);                 // the groupNumber of the item to be added
    const item = {                                                           // set up dataStruct to add to timeLine DataSet
      id: this.localAddId,
      start: new Date(this.formatDateForTimeline(this.startDate.value)),
      end: new Date(this.formatDateForTimeline(this.endDate.value)),
      style: 'color:blue',
      content: content,
      group: groupNum
  };

  console.log('item in save ' + item);
  this.timeline.itemsData.getDataSet().add(item);                       // add the new tA to local DataSet
  this.localAddId++;                                                     // increment the id so can add additional tAs
  this.newTimeAwayBool = false;                                         // enable editing of existing tAs  
  this.getEditSvce.insert(params);                                    //  insert into dB 
}


/*
  needToInsert(type, event){
    if (type =='start')
     this.newTAparams.startDate = this.formatDateForTimeline(event);
    if (type =='end')
     this.newTAparams.endDate = this.formatDateForTimeline(event);
    if (type =='reason')
     this.newTAparams.reason = event.value; 
    if (type =='Notes')
     this.newTAparams.Note = event.curentTarget.value; 
    if (this.newTAparams.startDate.length > 0 && this.newTAparams.endDate.length > 0
      &&  this.newTAparams.reason >= 0)
    this.saveTimeAwayBool = true;                                      // show the Save TimeAway button
    var index = this.useridToUserkeys.map(function(e) { return e.userid; }).indexOf(<string>this.userid);  //find arrayIndex of userId
    var uKey = this.useridToUserkeys[index].userkey                   // the userKey of the loggedIn user
    this.userkey = this.useridToUserkeys[index].userkey                   // the userKey of the loggedIn user
      console.log("cons is " + index + "userkey  is " + uKey) 
  } 
  */
}
