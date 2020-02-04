


import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

declare var require: any;
const vis = require('../../../node_modules/vis/dist/vis.js');
@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})

export class TimeLineComponent implements OnInit {
  @ViewChild('visjsTimeline', {static: false}  ) timelineContainer: ElementRef;
  tlContainer: any;
  timeline: any;
  data: any;
  data2: any;
  options: {};
  groups: any;
  items: any;
  redraw: boolean;
  itemNum: string;
  firstDay: String;
  lastDay: String;
  qP: any;
  idSel: String;
  userkey: number;
  lastName: String;
  editable: boolean;
  reason: String;
  startDate: FormControl;
  endDate: FormControl;
  nameList: String[];                                   // list of names appearing in data for forming groups
  userid: String;
  test: any;
  _readonly:boolean;
  showControls: boolean;
  _id: string;

  constructor( private http: HttpClient, private activatedRoute: ActivatedRoute) {
    
    this.redraw = true;     
    this.showControls = false;                                        // don't know why but this is necessary
    this._readonly = true;
  }
  clicked(){                                                        // this responds to ANY click in the div containing the calendat
    if (document.getElementById("datums"))     {                     
       var id = document.getElementById("datums").innerText;        // get the id from the vis click
       this._id = document.getElementById("datums").innerText;        // get the id from the vis click
       console.log("thisis is " + this._id);
       if (this._id !== "datums" )                                // don't draw controls unless user has clicked an actual box
        this.showControls = true;
      }
    if ( this.data2._data[id] &&  this.data2._data[id].className == this.userid)    // loggedInUser is timeAway owner
      this._readonly = false;
    else                                            
      this._readonly = true;  
      if (this.data2._data[id]){
      this.reason = this.data2._data[id].title;
      this.startDate = new FormControl(new Date(this.data2._data[id].start));   // this is where the value is set
      this.endDate = new FormControl(new Date(this.data2._data[id].end));
      }
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
    this.userid = qP.userid;
    this.getTimelineData2();
  }
  setGroups(s){
    console.log("set Groups " + s._data);
    this.nameList = new Array();
    for(let i=0; i< s.length; i++){                                         // step thru the data
      if (this.nameList.indexOf(s._data[i].content) < 0)        // if name is not already there
        this.nameList.push( s._data[i].content)                 // add name 
    }
    this.nameList.sort();                                       // alphabetize the nameList
  }
  ngAfterViewInit() {
    if (this.timelineContainer  ) {
      this.tlContainer = this.timelineContainer.nativeElement;
    }
  }
  assignGroups(){
    for (var property in this.data2._data ) {
      if (this.data2._data.hasOwnProperty(property)) {
        this.data2._data[property].group = this.nameList.indexOf(this.data2._data[property].content)
     //   this.data2._data[property].style="color:red";
      }
    }
  }
  getTimelineData2() 
  {
   this.items = new vis.DataSet([
      {}
      // more items...
    ]);
    let url = 'http://blackboard-dev.partners.org/dev/AngVacMan/getVacsBB.php?start=2019-06-01&end=2019-08-01&userid=' + this.userid;
    console.log("url is " + url );
    this.http.get(url).subscribe(
      (val) => {
        this.setTheData(val);
        this.setGroups(this.data2);
        this.groups = new vis.DataSet([]);
        for( let i = 0; i < this.nameList.length; i++){
          this.groups.add({id:i, content:this.nameList[i], value:i})
        }
        this.assignGroups();
        this.timeline = new vis.Timeline(this.tlContainer, this.data2, {});
        this.timeline.setOptions(this.options);
        this.timeline.setGroups(this.groups);
        this.timeline.on('select', function ( properties ) {
          this.idSel = properties.items;
          console.log("properties" + properties + " qp" + this.qP + "idSel is " + this.idSel);
          document.getElementById('datums').innerHTML = properties.items  ;               // store the id in the DOM for use by Angular
        });
  //      console.log(" http " + val);
      }
    );

    console.log(" db dataset " + this.data2);
    this.options = {
      editable: {
      //  add: true,         // add new items by double tapping
   
      //  updateGroup: true, // drag items from one group to another
      //  remove: true,       // delete an item by tapping the delete button top right
        overrideItems: false  // allow these options to override item.editable
      },
      onAdd: function(item, callback) {
        console.log('add');
     //   let d = this.names;
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
  }
  clear(){
    console.log("clear " );
  }
  editReason(s){
      var itemNum = document.getElementById('datums').innerHTML;          // item num to b edited
      this.data2.update({id:itemNum, title: s.currentTarget.value});   
    }   

  editDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
    var itemNum = document.getElementById('datums').innerHTML;          // item num to b edited
    var editTime = new Date(event.value);                               // date returned by DatePicker
    var month = editTime.getMonth() + 1;                                // get month to assemble to edit
    var day = editTime .getDate();                                      // mm
    var year = editTime .getFullYear();                                 // mm
    var s =  month + "-" + day + "-" + year;                            // assemble editDate
    console.log("typs is " + type);
  
    if (`${type}` == 'start'){
      this.data2.update({id:itemNum, start: s});  
    }                                                                   // update startDate
    if (`${type}` == 'end'){
      this.data2.update({id:itemNum, end: s});   
    }    
                       
  }
  remove(){
    var itemNum = document.getElementById('datums').innerHTML;          // item num to b edited
    this.data2.remove(itemNum)
  }
  fedit() {
    this.itemNum = document.getElementById('datums').innerHTML;
    console.log("fedti has " + this.itemNum  + "this.qp " + this.qP.userkey);
    if (this.itemNum == this.qP.userkey)
      this.editable = true;
    else
      this.editable = false;  
  }

  getTimelineData() {
    this.data = new vis.DataSet([
      {id: 2, content: 'Left Lung PTV', start: '2019-02-05', end: '2019-04-05', title: ' Left Lung PTV 20 fx, 4500 cGy cGE' },
      {id: 3, content: 'LIVER SBRT', start: '2019-06-05', end: '2019-08-05', title: ' LIVER SBRT 5 fx, 4500 cGy cGE' },
    ]);
        this.options = {
          editable: true,
          showTooltips: true,
          tooltip: {
            followMouse: true,
            overflowMethod: 'cap'
          },
          margin: {
            item: 20,
            axis: 40
          }
        };
    }
}
