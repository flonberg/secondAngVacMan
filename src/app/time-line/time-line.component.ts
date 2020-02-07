import { editParam } from './../dose-fx/dose-fx.component';
import { GenEditService } from './../gen-edit.service';
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
interface reasonString {
  index: number;
  rString: string;
}
interface newTAparams {
  startDate: string,
  endDate: string,
  reason: number,
  Note: string
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
  redraw: boolean;
  itemNum: string;
  qP: any;                                              // used to receive queryParams
//  idSel: String;
  userkey: number;
  reasons = ["Personal Vacation", "Other", "Meeting"]
  reason: String;
  startDate: FormControl;
  endDate: FormControl;
  reasonStrings: String[];
  nameList: String[];                                   // list of names appearing in data for forming groups
  userid: String;
  _readonly:boolean;
  showControls: boolean;
  _id: string;
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

  constructor( private http: HttpClient, private getEditSvce: GenEditService, 
    private activatedRoute: ActivatedRoute, private datePipe: DatePipe) {
    this.redraw = true;     
    this.showControls = false;                            // *ngIf condition for the controls section
    this._readonly = true;
    this.isApprover = false; 
 
  }

  clicked(){   // this responds to ANY click in the div containing the calendat                                             
    if (document.getElementById("datums"))     {                     
       var id = document.getElementById("datums").innerText;        // get the id from the vis click
       this._id = id;        
       if (this._id !== "datums" )                                // shows user had clicked a box                 
        this.showControls = true;
      }
    if ( this.data2._data[id] &&  this.data2._data[id].className == this.userid)    // loggedInUser is timeAway owner so make widgets editable
      this._readonly = false;
    else                                            
      this._readonly = true;  
    if (this.data2._data[id]){                                    // if the timeAway is defined
      this.startDate = new FormControl(new Date(this.data2._data[id].start));   // this is where the value is set
      this.endDate = new FormControl(new Date(this.data2._data[id].end));
      if (this.data2._data[id].reason || this.data2._data[id].reason == 0 ) 
        this.reasonSelect = this.data2._data[id].reason.toString();     // expecting string 
      }
    if (this.userid == 'napolitano' )                             // official 'approver'
      this.isApprover = true;  
    }
  ngOnInit() {
    this.activatedRoute                                             // point to the route clicked on 
    .queryParams                                                    // look at the queryParams
    .subscribe(queryParams => {                                     // get the queryParams as Observable
      this.qP = queryParams;
      this.setQP(queryParams);
    })
  }
  setTheData(s){
    this.data2 = new vis.DataSet(s);
    console.log(" data2  is " + this.nameList);
  }
  setQP(qP){
    this.userid = qP.userid;                                              // store userid to decide which fields are editable
    this.getTimelineData2();                                              // get the data from REST database call. 
  }
 
  ngAfterViewInit() {
    if (this.timelineContainer  ) {
      this.tlContainer = this.timelineContainer.nativeElement;
    }
  }
  
  getTimelineData2() 
  {
    let url = 'http://blackboard-dev.partners.org/dev/AngVacMan/getVacsBB.php?start=2019-06-01&end=2019-08-01&userid=' + this.userid;
    this.http.get(url).subscribe(
      (val) => {
        this.setTheData(val);                                                            // store data in this.data2
        this.setGroups(this.data2);                                                      // make this.nameList a  list of users who have timeAways found
        this.groups = new vis.DataSet([]);                                               // make a dataStruct for the groups
        for( let i = 0; i < this.nameList.length; i++){                                   // foreach name found to have tA's
          this.groups.add({id:i, content:this.nameList[i], value:i})                      // add a group
        }
        this.assignGroups();                                                              // go thru tA's and assign each to proper Group
        this.timeline = new vis.Timeline(this.tlContainer, this.data2, {});
        this.timeline.setOptions(this.options);
        this.timeline.setGroups(this.groups);
        this.timeline.on('select', function ( properties ) {                              // whenever user clicks on a box in the timeLine
      //    this.idSel = properties.items;                                                  // store the id for use in editing
          document.getElementById('datums').innerHTML = properties.items  ;               // store the id in the DOM for use by Angular
        });
      }
    );
    this.options = {
      editable: {
      //  add: true,         // add new items by double tapping
      //  updateGroup: true, // drag items from one group to another
      //  remove: true,       // delete an item by tapping the delete button top right
        overrideItems: false  // allow these options to override item.editable
      },
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
      selectable: true,
      start: new Date('2019-06-01'),
//      start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      end: new Date('2019-08-01'),
//      end: new Date(new Date().getFullYear(), new Date().getMonth()+ 2, 1),

    };
  }                                                           // end of getTimelineData2
  setGroups(s){                                                           // make a list of all user forWhich vacs have been found
    this.nameList = new Array();
    for(let i=0; i< s.length; i++){                                        // step thru the data
      if (this.nameList.indexOf(s._data[i].content) < 0)                  // if name is not already there
        this.nameList.push( s._data[i].content)                           // add name 
    }
    this.nameList.sort();                                                 // alphabetize the nameList
  }
  assignGroups(){                                                                       // put each tA in proper group. 
    for (var property in this.data2._data ) {
      if (this.data2._data.hasOwnProperty(property)) {
        this.data2._data[property].group = this.nameList.indexOf(this.data2._data[property].content)  // set the correct groupNumber
        if (this.data2._data[property].approved == 0)
          this.data2._data[property].style="color:red";
      }
    }
  }
  clear(){
    console.log("clear " );
  }
  editReason(s, colName){ 
      var itemNum = document.getElementById('datums').innerHTML;   
      var seP = <SeditParams>{};                                          // define instance of SeditParams interface
      seP.who = this.userid;
      seP.whereColName = "vidx";
      seP.tableName = "vacation3";
      if (this.data2._data[itemNum]  )    
        seP.whereColVal = this.data2._data[itemNum].vidx;
      else
        this.needToInsert(colName, s);   
      seP.editColName = colName
      if (s.value)                                                      // if comes from a 'select' widget
        seP.editColVal = s.value; 
      if (s.target && s.target.value)  
        seP.editColVal = s.target.value; 
      if (s == 1)  
        seP.editColVal = '1'; 
      this.getEditSvce.update(seP); 
    }   

  editDate(type: string, event: MatDatepickerInputEvent<Date>) {
    var itemNum = document.getElementById('datums').innerHTML;          // item num to b edited
    var seP = <SeditParams>{};                                          // define instance of SeditParams interface
    seP.who = this.userid;
    seP.whereColName = "vidx";
    seP.tableName = "vacation3";
    if (this.data2._data[itemNum]  )                                    // if the IS an item to be edited
      seP.whereColVal = this.data2._data[itemNum].vidx;
    else {
      this.needToInsert(type, event);                                    // this is an INSERT
      return;                                                           // don't do anything else
    }
    var s = this.makeDateString(event)                                 
    if (`${type}` == 'start'){
      this.data2.update({id:itemNum, start: s});  
      seP.editColName = "startDate";    
      seP.editColVal = this.datePipe.transform(s, 'yyyy-MM-dd');    
    }                                                                   // update startDate
    if (`${type}` == 'end'){
      this.data2.update({id:itemNum, end: s});   
      seP.editColName = "endDate";    
      seP.editColVal = this.datePipe.transform(s, 'yyyy-MM-dd');   
    }   
    this.getEditSvce.update(seP);          
  }
  makeDateString(event){
    var editTime = new Date(event.value);                               // date returned by DatePicker
    var month = editTime.getMonth() + 1;                                // get month to assemble to edit
    var day = editTime.getDate();                                      // mm
    var year = editTime.getFullYear();                                 // mm
    var s =  month + "-" + editTime.getDate() + "-" + editTime.getFullYear();  
    return s;
  }
  needToInsert(type, event){
    if (type =='start')
     this.newTAparams.startDate = this.makeDateString(event);
    if (type =='end')
     this.newTAparams.endDate = this.makeDateString(event);
    if (type =='reason')
     this.newTAparams.reason = event.value; 
    if (type =='Notes')
     this.newTAparams.Note = event.curentTarget.value; 
    if (this.newTAparams.startDate.length > 0 && this.newTAparams.endDate.length > 0
      &&  this.newTAparams.reason >= 0)
      this.saveTimeAwayBool = true; 
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
    this.showControls = true;
    this._readonly = false;
    this._id = '1';
    this.newTimeAwayBool = true;
  }
  remove(){
    var itemNum = document.getElementById('datums').innerHTML;          // item num to b edited
    this.data2.remove(itemNum)
  }
}
