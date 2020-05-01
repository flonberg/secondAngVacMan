import { editParam } from './../dose-fx/dose-fx.component';
import { GenEditService, SinsertParams, dB_GETparams } from './../gen-edit.service';
import { SeditParams, dB_POSTparams } from './../gen-edit.service';
import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { DatePipe } from '@angular/common';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { throwIfEmpty } from 'rxjs/operators';

declare var require: any;
const vis = require('../../../node_modules/vis/dist/vis.js');

interface newTAparams {
  startDate: string;
  endDate: string;
  reason: number;
  Note: string;
}
interface nameToUserId {                        // used to setGroups
  lastName: string;
  userid: string;
}
interface useridToUserkey {                     // userd in setGroups
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
  platform = "dev";
//  platform = "prod";
  dB_PostParams: dB_POSTparams
  tlContainer: any;                                     // the div for the timeLie
  timeline: any;
  data2: any;                                           // the dS for the tA data
  options: {};                                          // options for timeLIne
  groups: any;
  groupsArray: any;
  contentArray: any;
  redraw: boolean;
  itemNum: string;
  qP: any;                                              // used to receive queryParams
//  idSel: String;
  userkey: number;
  reasons = ['Personal Vacation', 'Other', 'Meeting'];
  reason: String;
  startDate: FormControl;
  endDate: FormControl;
  reasonFC: FormControl;
  notesFC: FormControl;
  dateFrom: FormControl;
  goAwayerName: FormControl;
  reasonStrings: String[];
  nameList: String[];                                   // list of names appearing in data for forming groups
  userid: String;
  _readonly: boolean;
  showControls: boolean;
  _id: number;
  _content;                                           // store the item.content from click
  drawControls = true;
  drawEditControls = false;
  isApprover: boolean;
  reasonSelect = '';
  newTimeAwayBool = false;
  saveTimeAwayBool = false;
  newTAparams: newTAparams = {
    startDate: '',
    endDate: '',
    reason: -1,
    Note: ''
  };
  dB_PP: dB_POSTparams = {                          //  create instance of interface
    tableName:'vacation3',
    whereColName:[],
    whereColVal: [],
    editColNames: [],
    editColVals: []
  }
  SinsertPP: SinsertParams = {
    tableName:'vacation3',
    colName:['startDate', 'endDate' , 'reason', 'note', 'userid'],
    colVal:[]
  }
 // sEPP: SeditParams;
  nameToUserId: nameToUserId[];
  useridToUserkeys: useridToUserkey[];
  startDateEdited: boolean;
  endDateEdited: boolean;
  reasonEdited: boolean;
  seP = <SeditParams>{};  // define instance of SeditParams interface
  _vidx: string;
  endDateString: string;
  startDateString: string;
  endDateShownString: string;
  startDateShownString: string;
  index: number;
  useridP: string;
  form: FormGroup;
  cutOffDate: Date;
  startDateEntered: Date;
  formG: FormGroup;                                       // FormGroup for Adding new tA
  formEdit: FormGroup;                                    // Form Group for Editing tA
  doValidation: boolean;
  invalidFromDate: boolean;
  formValidation: boolean;
  newTimeAway2: boolean;
  notice: any;
  constructor( private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private datePipe: DatePipe, private fb: FormBuilder) {  
    this.redraw = true;
    this.showControls = false;                            // *ngIf condition for the controls section
    this._readonly = true;
    this.isApprover = false;
    this.nameToUserId = [ {lastName: '', userid: ''} ];
    this.useridToUserkeys = [{ userid: 'Unknown', userkey: 0 }];
    this.contentArray = [];
    this.newTimeAwayBool = false;                               // enable editing of existing tAs
    this.seP.whereColName = 'vidx';
    this.seP.tableName = 'vacation3';
    this.index = 0;
    this.form = new FormGroup({
      'startDate': this.startDate = new FormControl('', Validators.required),
      'endDate': this.endDate = new FormControl(['', Validators.required]),
      'reason': this.reasonFC = new FormControl(),
      'note': this.notesFC = new FormControl("-"),
    }   )
    this.cutOffDate = new Date('2019-02-01');
    this.createForm();

    this.formValidation = false;
    this.newTimeAway2 = false;
  }
  ngOnInit() {
    console.log(" this.router.url is   "   + this.router.url);
    this.activatedRoute                                             // point to the route clicked on
    .queryParams                                                    // look at the queryParams
    .subscribe(queryParams => {                                     // get the queryParams as Observable
      this.qP = queryParams;
      this.setQueryParams(queryParams);
      this.seP.who = this.userid;
      this.getTimelineData2();                                      // get the data from REST database call.
      this.checkIfNoticeNeeded();                                   // see if a notice of a change is needed
    });
  }
  checkIfNoticeNeeded(){                                             // The NoticeModal is used to inform of changes
    const getParams = <dB_GETparams>{                               // set the parameters for the genDB_GET interface
      tableName:'notice',
      whereColName:['UserId'],
      whereColVal:[ this.seP.who],                                  // the UserId of the loggedInUser
      getColName:['vacMan', ]
      };
    this.genEditSvce.genDB_GET(getParams).subscribe( val=>{         // get the datum from the notice table
       this.notice = val;                                           // save the resule
       if (!this.notice || this.notice[0]['vacMan']== 0){           // it NOT FOUND or 0
        document.getElementById('noticeModal').style.display = "block";     // show the modal 
       }
     });
  }
  closeModal(){
    document.getElementById('noticeModal').style.display = "none"; 
  }
  cancelNotice(){                                                   // 
    console.log('cancel Notice');
    const gP = <dB_POSTparams>{
      tableName: 'notice',
      whereColName: ['UserId'],
      whereColVal: [this.userid],
      editColNames: ['vacMan'],
      editColVals: ['1'],
      insert: true
    }
    this.genEditSvce.genDB_POST(gP);
    this.closeModal();
  }
  getNotice(UserId){
      const getParams = <dB_GETparams>{
        tableName:'notice',
        whereColName:['UserId'],
        whereColVal:[UserId],
        getColName:['vacMan', ]
      };
   this.genEditSvce.genDB_GET(getParams);
  }
     /*******************          This is called anytime the user RELEASES the mouse click **********************/
  clicked(ev) {// this responds to ANY click-RELEASE in the div containing the calendar
    console.log ("clicked" + ev);
       if (document.getElementById('datums') && document.getElementById('datums').innerText.length > 0) { // user click on a tA
           this._id = +document.getElementById('datums').innerText;     // _id of the item clickedOn in the DataSet
           this.createEditForm();                                   // THIS LOADS THE VALUES FROM DATASET INTO WIDGETS
       /////////  this.data2 is a DataSet Object which has the _data property to contain my data \\\\\\\\\\
           if (!this.data2._data[this._id]) {                                                        // click was NOT in a tA box;
            return;
          }
        this._vidx = this.data2._data[this._id].vidx;                                           // store the vidx for editing
        document.getElementById('vidx').innerText = this.data2._data[this._id].vidx; // store the vidx for DELETE
        this.seP.whereColVal = this.data2._data[this._id].vidx;                                 // seP =>  params used for editing tA
           if (this._id >= 0 ) {                                                                // shows user had clicked a box
             this.showControls = true;                                                          // show editing controls
             this.drawEditControls = true;
             }                                
           }
           console.log('clicked'  + this._id);
       if ( this.data2._data[this._id] &&  this.data2._data[this._id].className === this.userid) { // loggedInUser is tA owner 
           this._readonly = false;                                                              // enable editing
           } else {                                                                             // user is NOT tA owner
           this._readonly = true;                                                                // make controls readOnly
           }
           
       if (this.userid === 'napolitano' ) {                                                     // official 'approver'
           this.isApprover = true;
         }
         var dParams = {              // create a set of params to b used by genDB_POST to delete the tA
          'tableName': 'vacation3', 'whereColName': 'vidx', 'whereColVal': document.getElementById('vidx').innerText,
          'editColNames':[],
          'editColVals':[]                                       // reasonIdx is deleted flag.
        };
        this.dB_PP.whereColName=['vidx'];
        this.dB_PP.whereColVal = [document.getElementById('vidx').innerText]
                 
         /*******************          remove routine triggered by a click on the 'x'           **********************/
       if (document.getElementById('datums2').innerText.indexOf('remove') !== -1) {             // presence of the work 'remove' indicates user clicked 'x'
          this.data2.remove({id: +document.getElementById('datums').innerText});                // remove the item from the dataSet
           this.drawEditControls = false;                                                       // turn off the edit Controls.
           document.getElementById('datums2').innerText = "";                                   // clear it so that further clicks on tA don't result in delete
           dParams.editColNames = ['reasonIdx'];
           dParams.editColVals = ['99'];
           this.genEditSvce.genDB_POST(dParams);                                              // use REST call to delete tA from the dataBase.
       } /************  if 'remove' is NOT found the startDate and endDate are edited on page and in dB */
         else if (   this.data2._data[this._id] ){             // Ed/
            var startDateEdit = this.formatDateYYYymmdd(this.data2._data[this._id].start);    // format the date for use in dataBase
            var endDateEdit = this.formatDateYYYymmdd(this.data2._data[this._id].end);        //    "
          //  dParams.editColNames = ['startDate','endDate'];
            this.dB_PP.editColNames = ['startDate','endDate'];      
            this.dB_PP.editColVals = [startDateEdit ,endDateEdit ];
           // dParams.editColVals = [startDateEdit,endDateEdit];
            this.genEditSvce.genDB_POST(this.dB_PP);               // use REST call to update the dataBase.
         }
     }
     /*********  create the editTa widgets. Run by the constructor  ***********/
  createForm() {                                                                                // create the form for New tA
    this.doValidation = false;
    this.invalidFromDate = false;
    this.formG = this.fb.group({                          // fb is
      dateTo: ['', Validators.required ],
      dateFrom: ['', Validators.required ],
      reasonG: [''],
      noteG: ['']
    }, {validator: this.dateLessThan('dateFrom', 'dateTo', 'reasonG')}
    );
  }
////////   This triggered by clicked() and is where the data from the selected tA in the dataSet is loaded into the edit boxes. 
  createEditForm() {                                      // create the form for New tA
    console.log('147');
    this.reasonSelect = this.data2._data[this._id].reason.toString(); // set selected
    this.doValidation = false;
    this.invalidFromDate = false;
    var toDate = new Date(this.data2._data[this._id].start).toISOString().slice(0,10);           // format date yyyy/mm/dd
    var fromDate = new Date(this.data2._data[this._id].end).toISOString().slice(0,10);
    this.formEdit = this.fb.group({                          // fb is
      goAwayerBox: [ this.data2._data[this._id].content],
      dateToEdit: [toDate, Validators.required ],
      dateFromEdit: [fromDate, Validators.required ],
      reasonGEdit: [this.reasonSelect],
      noteGEdit: [ this.data2._data[this._id].note]
    }, {validator: this.dateLessThan('dateFromEdit', 'dateToEdit', 'reasonGEdit')}
    );
  }

  dateLessThan(from: string, to: string, reason: string) {
      return (group: FormGroup): {[key: string]: any} => 
      {
        let today = new Date(); 
        if (group.controls[to].value && group.controls[from].value >= group.controls[to].value) {
          return {
            dates: "End Date must be after Start Date "
          };
        }
        if (group.controls[from].value ){
          let fDate = new Date(group.controls[from].value);
          if (fDate < today)
          return {
            dates: "Date must be in the future"
          };

        }
        if (group.controls[from].value.length > 0  && group.controls[from].value.length  > 0  && group.controls[reason].value.length  > 0){
          this.formValidation = true;
          console.log("form valid " + this.formValidation)
        }
        return {};
    }
  }

  onSubmit() {
    const item = {
        id: Object.keys(this.data2._data).length + 3,                 // incase the user has DELETED a tA before adding
        start: this.formG.value.dateFrom + ' 00:00:00',
        end: this.formG.value.dateTo + ' 00:00:00',
        content: this.contentArray[this.userkey],                    // build the dataStruct to add to the timeLine DataSet,
        group: this.groupsArray.indexOf(this.contentArray[this.userkey]),
        reason: this.formG.value.reasonG,
        note: this.formG.value.noteG,
      };
    var idOfAdded = this.timeline.itemsData.getDataSet().add(item);  // add the new tA to local DataSet
        /*********     Add to dataBase  **********************/
    const params = <SinsertParams>{};                                // create instance of interface
        params.tableName = 'vacation3';
        params.colName  = ['startDate', 'endDate' , 'reason', 'note', 'userid'];  // names of columns to INSERT
        params.colVal = [this.formG.value.dateFrom,  // colValues
        this.formG.value.dateTo, this.formG.value.reasonG,
        this.formG.value.noteG, this.userkey];
    this.genEditSvce.insert(params);                                  //  insert into dB
    this.newTimeAway2 = false;                                        // turn off the controls  
  }
  /*
  get startDateGet(){ return this.form.get('startDate');}
  get endDateGet(){return this.form.get('endDate');}
  */
  /************    specific update routine to update StartDate and EndDate of tA, when user drags a tA  ************/
  updateDB_StartEnd(sD: string, eD: string) {
      const upDateParams = <dB_POSTparams>{
        tableName:'vacation3',
        whereColName:['vidx'],
        whereColVal:[this.data2._data[this._id].vidx],
        editColNames: ['startDate', 'endDate'],
        editColVals: [  this.formatDateYYYymmdd(sD) , this.formatDateYYYymmdd(eD)  ]
      };
   this.genEditSvce.genDB_POST(upDateParams);
  }

  formatDateYYYymmdd(d) {
    const date = new Date(d);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const dd = date.getDate();
    const fD = m + '/' + dd + '/' + y;
    return fD;
  }

  setQueryParams(qP) {
    if (qP.userid) {
      this.userid = qP.userid;
      this.genEditSvce.setUserId(qP.userid);                                            // pass the userid to gen-edit for use in REST svces
    }
    if (qP.platform) {
      this.platform = qP.platform;
      console.log("timeLine platform " + this.platform);
    }
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    if (this.timelineContainer  ) {
      this.tlContainer = this.timelineContainer.nativeElement;
    }
  }
  
  getTimelineData2() {
    /***********   set the startDate and endDates for collecting enuff data for everyone to be in the dataStructure    ***************/
    const numWeeks = 8;                                                                 // number of weeks to show on the calendar
    const todayDate = new Date();
    const startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);         // move to first day of current month
    const endDate = new Date();                                                         // create new date to use for end                            
    endDate.setMonth(startDate.getMonth() + 4);                                         // set a date to be the forward date of data collection
    startDate.setMonth(startDate.getMonth() - 2);                                       // set date for backward data collection far enough back to get all users
    this.startDateString = this.datePipe.transform(startDate, 'yyyy-MM-dd');            // format it for dataBase startDate for getting tAs
    this.endDateString = this.datePipe.transform(endDate, 'yyyy-MM-dd');                // mm for endDate
    /****************   set the dates for showing on the calendar as the first of current month and forward 8 weeks  ******************/
    var startDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);    // move to first day of current month for showing
    var endDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);      // move endDateShown foward 8 weeks from startDateShown
    endDateShown.setDate(startDate.getDate() + numWeeks * 7);                           // set endDate of shown TimeLine for 2 months
      this.genEditSvce.getTAs(this.startDateString,this.endDateString).subscribe(
      (val) => {
        if (this.index === 0) {                                           //  ??? this is always 0 
          this.data2 = new vis.DataSet(val);
         } else {
          this.data2 = Array();
        }
        console.log( 'data2   365');
                                                        // store data in this.data2
        this.removeBads();                                                
        this.setGroups(this.data2);                           // make this.nameList a  list of users who have timeAways found
        this.groups = new vis.DataSet([]);
        let i = 0;                                           // make a dataStruct for the groups
        for ( i = 0; i < this.nameList.length; i++) {                                   // foreach name found to have tA's
          this.groups.add({id: i, content: this.nameList[i], value: i });                    // add a group
           this.groupsArray[i] = this.nameList[i];
        }
        const top = this.nameList.length * 20;
        const topString = top.toString() + 'px';
    //    document.getElementById('controls').style.setProperty('top', topString);
        this.assignGroups();                                                              // go thru tA's and assign each to proper Group
        this.timeline = new vis.Timeline(this.tlContainer, this.data2, {});
        this.timeline.setOptions(this.options);
        this.timeline.setGroups(this.groups);
        this.timeline.on('select', function ( properties ) {                              // whenever user clicks on a box in the timeLine
          document.getElementById('datums').innerHTML = properties.items  ;             // properties.items is the _id of the item in the DataSet                                                                                   // store the _id in the DOM for use by Angular to do edits ...
        });
      function logEvent(event, properties) {                                            // used to capture event if user clicke 'x' to delete tA
        const log = document.getElementById('log');                                     // so if 'remove' is found  
        const msg = document.createElement('div');
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
      onAdd: function (item, callback) {
        document.getElementById('datums').innerHTML = item.group;
        document.getElementById('datums2').innerHTML = item.start;
      },
      onRemove: function (item, callback) {
        document.getElementById('datums').innerHTML = item.id;
        document.getElementById('datums2').innerHTML = callback;
      },
     // selectable: true,
      start: startDateShown,
//      start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      end: endDateShown,
//      end: new Date(new Date().getFullYear(), new Date().getMonth()+ 2, 1),
    };
  }                                                           // end of getTimelineData2
  removeBads(){
    for (let key in this.data2._data){
      if (this.data2._data[key].start > this.data2._data[key].end){
        delete this.data2._data[key];
      }
    }
  }
  /**********  make a dataStructure to hold all names of tA holders  */
  setGroups(s) {                                                           // s is the timeline dataSet
    this.nameList = new Array();
    this.groupsArray = new Array();
    for (let i = 0; i < s.length; i++) {                                   // step thru the data
      if (s._data[i] && this.nameList.indexOf(s._data[i].content) < 0) {                 // if name is not already in the dS
        this.nameList.push( s._data[i].content);                           // put it in the dS 
        this.nameToUserId[i] = { lastName: s._data[i].content, userid: s._data[i].userkey };// make dS of lastName ; userkey
        this.useridToUserkeys[i] = { userid: s._data[i].userid, userkey: s._data[i].userkey };// dS userid : userkey
        this.contentArray[s._data[i].userkey] = s._data[i].content;         // used to get 'content' param to add to dataSet.
      }                         }
    this.nameList.sort();                                                 // alphabetize the nameList
    const index = this.useridToUserkeys.map(function(e) { return e.userid; }).indexOf(<string>this.userid);  // find arrayIndex of userId    
    if (this.useridToUserkeys[index])                               // Someone may use page who is NOT a goAwayer. 
      this.userkey = this.useridToUserkeys[index].userkey;                   // the userKey of the loggedIn user
  }
  assignGroups() {                                                     // put each tA in proper group.
    for (const property in this.data2._data ) {
      if (this.data2._data.hasOwnProperty(property)) {                // 'hasOwnProperty' is typescript to see it a p is in arry
        this.data2._data[property].group = this.nameList.indexOf(this.data2._data[property].content);  // set the correct groupNumber
        if (this.data2._data[property].approved === 1) {
          this.data2._data[property].style = 'color:green';
        }
      }
    }
  }
      /*************  remove the tA from display working, needs dataBase part **************/
  remove() {
    this.data2.remove(this._id);                                         // remove LOCALLY
    this.showControls = false;                                          // turn off controls             
    this.dB_PP.editColNames = ['reasonIdx'];                            // the col which holds the DELETE sign
    this.dB_PP.editColVals = ['99'];                                    // the DELETE code
    this.dB_PP.whereColName = ['vidx'];
    this.dB_PP.whereColVal = [document.getElementById('vidx').innerText]  // the DOM element link to the timeline
    this.genEditSvce.genDB_POST(this.dB_PP);                            // do the dB operation
  }
  editGen(type: string, event: any) {                                  // editGen is used for ALL fields
   var dateForDataSet = ''; 
   console.log( 'editGen ' + this.data2._id);
    if (type =='start' || type =='end'){                                  // if it is a date
      const s = this.formatDateForTimeline(event.value);                 // make the string for local update
      dateForDataSet = event.target.value + " 00:00:00";                 // make a date for dataSet
    }
    if (event.target && event.target.value)                               // the editColVal can be a target.balue
      this.dB_PP.editColVals = [ event.target.value];
    if (event.value)                                                      // or it can be an event.value
      this.dB_PP.editColVals = [ event.value];
    console.log('edtied local ');
    if (type == 'reason'){
      this.dB_PP.editColNames = ['reason'];
      this.data2.update({id: this._id, reason: dateForDataSet});  
    }
    if (type === 'start') {
      this.data2.update({id: this._id, start: dateForDataSet});           // do the local update
      this.startDateEdited = true;
      this.seP.editColName = 'startDate';
      this.dB_PP.editColNames = ['startDate'];
    }                                                                   // update startDate
    if (type === 'end') {
     this.data2.update({id: this._id, end: dateForDataSet}); 
      this.seP.editColName = 'endDate';
      this.dB_PP.editColNames = ['endDate'];
      this.endDateEdited = true;
    }
    if (type == 'note'){
      this.dB_PP.editColNames = ['note'];
      this.dB_PP.editColVals = [ event.target.value];
    }
    this.genEditSvce.genDB_POST(this.dB_PP);                              // do the dB edit.
  }
  makeDateString(event) {
    const editTime = new Date(event.value);                               // date returned by DatePicker
    const month = editTime.getMonth() + 1;                                // get month to assemble to edit
    if (month <= 9) {
      const monthString  = '0' + <string><unknown>month;
    }
    const day = editTime.getDate();                                      // mm
    const year = editTime.getFullYear();                                 // mm
    const s =  month + '-' + editTime.getDate() + '-' + editTime.getFullYear();
    return s;
  }

  /**************  format date as yyyy-mm-dd  for dataBase ********************/
  formatDateForTimeline(date) {
      const d = new Date(date);
          let month = '' + (d.getMonth() + 1);
          let day = '' + d.getDate();
          const year = d.getFullYear();
      if (month.length < 2) {
          month = '0' + month;
      }
      if (day.length < 2) {
          day = '0' + day;
      }
      return year + '-' + month + '-' + day + ' 00:00:00';
  }


  approve() {
    console.log('appreove' + this._id);
    this.data2.update({id: this._id, style: 'color:blue'});

    this.data2._data[this._id].approved = 1;
 //   this.editReason(1, 'approved');
  }
  setNewTimeAway2(){
    this.newTimeAway2 = true;
  }
  /*
  newTimeAway() {
    this.showControls = true;                                         // show the dataEntry controls
    this._readonly = false;
    this._id = 1;
    this.showControls = true;
    this.newTimeAwayBool = true;
  }
  */
}
