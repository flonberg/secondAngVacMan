
import { GenEditService, SinsertParams, dB_GETparams, dB_SimpleGETparams, emailParams, InsertParams, dB_POSTparams } from './../gen-edit.service';
//import { SeditParams } from './../gen-edit.service';
import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe, KeyValue } from '@angular/common';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { style } from '@angular/animations';

declare var require: any;
const vis = require('../../../node_modules/vis/dist/vis.js');

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})

export class TimeLineComponent implements OnInit {
  @ViewChild('visjsTimeline', {static: false}  ) timelineContainer: ElementRef;
//  platform = "dev";
  rand: number                                          // detect reload of div
  rData:any;                                            // holds raw data from dataBase 
  covererName = "";                                     // datum entered by entryWidged
  covererUserKey: number;                               // confirmed use
  showPhysURL: string;                                  // used to switch between Phys-Dosim for Brian and Jon
  showDosimURL: string;
  tlContainer: any;                                     // the div for the timeLie
  timeline: any;                                       // the dS for the tA data
  options: {};                                          // options for timeLIne
  groups2: any;                                         // for Group DataSet
  groups2Array: String[];                               // Keep track of the groups as they are added 
  showSubmitChanges: boolean;                           // enable Submit Changes
  itemNum: string;
  qP: any;                                              // used to receive queryParams
  userkey: number;
  platform: any;                                        // store platform from queryParams
  reasons = ['Personal Vacation', 'Other', 'Meeting'];
  masterArray = ['This new page is part of upgrade of Whiteboard.',
  'If you have difficulties or questions concerning the page, please email to flonberg@partners.org.',
  'There is a button for Help in the lower right corner of the page. '
                ];
  helpArray = [   "If TimeAway is in red, it means that now coverer has been nominated",
  "Orange means that the coverer has not yer accepted the coverage.",
  "Green means that the coverage has been accepted.",
    "Pan and zoom are implemented."  ];
  noticeColName='vacMan';                             // used as @input for notice.component.tx
  noticeModalComonentID='vacManModal'
  reason: String;

  startDate: FormControl;                             // used in new FormGroup line # 208
  endDate: FormControl;
  reasonFC: FormControl;
  notesFC: FormControl;
  deleteControl: FormControl;
  dateFrom: FormControl;
  goAwayerName: FormControl;

  endBeforeStart: boolean;                            // used to trigger error message
 // tAstartDate: any;
 // tAendDateObj: [{}];
  nameList: String[];                                   // list of names appearing in data for forming groups
  userid: String;
  _readonly: boolean;
  showControls: boolean;
  _id: number;
  _content;                                               // store the item.content from click
  drawControls = true;
  drawEditControls = false;
  isApprover: boolean;                                    // may be used for webPage tA approval for Brian          
  reasonSelect = '';                                      // the reason from dataBase
  shownNote = ''; 
  newTimeAwayBool = false;
  saveTimeAwayBool = false;
  showPhysicist :String;
  param: String;                                          // may be used for getter showPhysicist/showDosim
  //storedEdits = [{}]                                    // store values from startDate, endData, reason, note from user entries. 
 loggedInLastName: string;
 loggedInFirstName: string;
 loggedInRank: string;
  _vidx: string;                                          // holds the vidx from items dS which is the dataSet, used to find correspond tA in rData
  endDateString: string;                                  // used to update the DataSet when user edits. 
  startDateString: string;
  index: number;

  form: FormGroup;
  formG: FormGroup;                                       // FormGroup for Adding new tA
  formEdit: FormGroup;                                    // Form Group for Editing tA
  formValidation: boolean;                                // used to enable the Submit button on newTA form. 
  newTimeAway2: boolean;                                  // turn OFF editTA controls when NewTA is active
  notice: any;

  coverageAclass:string;                                  // used to change the color of tA to reflect Accepted/NotAccepter
  ret: any;
  lastInsertIdx: any;
  //events: any;
  rDataKey: number;                                       // the key of this vidx in the rawData 
  covererSelect = new FormControl();
  reasonSelectControl = new FormControl();
  foptions: string[] = [];                                // used for autoComplete
  filteredOptions: Observable<string[]>;                  // used for autoComplete

  constructor( private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private datePipe: DatePipe, private fb: FormBuilder) {  
      this.ret = 1;                                       // store the vidx of the added tA
    this.showControls = false;                            // *ngIf condition for the controls section
    this._readonly = true;
    this.isApprover = false;
    this.newTimeAwayBool = false;                         // enable editing of existing tAs
    this.showSubmitChanges = false;                       // Show the Submit Changes button
   /*
    this.form = new FormGroup({                           // Form for creating new tAs
      'startDate': this.startDate = new FormControl('', Validators.required),
      'endDate': this.endDate = new FormControl(['', Validators.required]),
      'reason': this.reasonFC = new FormControl(),
      'note': this.notesFC = new FormControl("-"),
    }   )
   */
    this.createForm();                                     // create this.formG, used for New TimeAway widgets
    this.formValidation = false;
    this.newTimeAway2 = false;
    this.covererUserKey = -1;
  }
  private _filter(value: string): string[] {              // autoComplete engine
    const filterValue = value.toLowerCase();
    return this.foptions.filter(option => option.toLowerCase().startsWith(filterValue));
  }
  isSafari = true
  ngOnInit() {
        if (window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1)  // if in Safari, need to reload on Add new tA
          this.isSafari = false;                                              // if NOT can do an add. 
        if (window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
          this.isSafari = false;
        /**********   for AutoComplete search    */
        this.filteredOptions = this.covererSelect.valueChanges          // autoComplete engine
            .pipe(
              startWith(''),
              map(value => this._filter(value))
            );
        this.endBeforeStart = false;                      // for generating error message      
        console.log(" 153  this.router.url is   "   + this.router.url   + "server is " +  window.location.href);
        this.activatedRoute                                               // point to the route clicked on
          .queryParams                                                      // look at the queryParams
          .subscribe
          (queryParams => 
            {                                                              // get the queryParams as Observable
              this.qP = queryParams;
              this.setQueryParams(queryParams);
              this.getTimelineData2(0);                                    // get the data from REST database call.
              const getParams = <dB_SimpleGETparams>{                      // set the parameters for Notice GET
                action:'simpleGet',
                tableName:'notice',
                whereColName:'UserId',
                whereColVal: this.userid,                                   // the UserId of the loggedInUser
                getColName:'vacMan', 
                };
              this.genEditSvce.simpleGet(getParams).subscribe( val=>{       // get the datum from the notice table
                this.notice = val;                                          // save the resule
                if (this.notice &&  this.notice['vacMan']== 0)              // if user as NOT checked out of Notice
                  document.getElementById('noticeModalComponent').style.display = "block";     // NEED VAR = MODAL ID 
                if (!this.notice ) {                                        // it NOT FOUND because first time for this use
                  if (   document.getElementById('noticeModalComponent') )
                  document.getElementById('noticeModalComponent').style.display = "block";  
                  const tP = <InsertParams> {                               // params forinsert record for this user in the Notice table
                    action: 'insertRecGen',
                    tableName: 'notice',
                    colName: ['vacMan', 'UserId'],
                    colVal:['0',<string>this.userid,]
                  }  
                this.genEditSvce.genPOST(tP)                                // insert into notice table
                .subscribe(                                                 // 
                (response) => {
                  this.lastInsertIdx = response;
                })
              }
            });                                                             // close of simpleGet subscrive
          }
        );                                                                  // close of queryParams => 
  }

  writeLog(s, arg){
    this.genEditSvce.writeLog(s  + "   "  + this.covererUserKey).subscribe(
      (res) => {
        console.log("res from  writeLog is  %o", res);
      }
    );
  }

  storeCovererData()                                                        // called by 'Send EmailTo Coverer' button
  {                    // store the nominated coverer UserKey 
    this.rData['emailByKey']['116'] = "flonberg@partners.org";              // since I am not in dataBase need to add adHoc
    const devEmailAddress = "flonberg@partners.org";                        // since I am not in dataBase need to add adHoc
    var link1 = this.genEditSvce.urlBase +`/acceptCov.php?covererAUserkey=` 
          + this.covererUserKey + '&mode=acceptCov&vidx=' + this.items._data[this._id].vidx;
  
    this.writeLog(" in storeCovererData of TimeLine ", link1);
        /*************  Send Coverage Emails        */
    var message = `<html> <head><title> Vacation Coverage Acknowledgment </title></head>
                      <p> ` + this.loggedInFirstName + `  ` + this.loggedInLastName + ` would like you to cover her/his time away. 
                      starting  ` +  this.datePipe.transform(this.items._data[this._id].start) + `
                      returning on  ` + this.datePipe.transform(this.items._data[this._id].end) + ` </p>
                      <p> THIS IS A TEST IN SOFTWARE DEVELOPEMENT, APPOLOGIES FOR THE BOTHER, PLEASE IGNORE. </p>
                      <p><a href=`+ link1 + `>  ` + this.covererName + ` accepts coverage. </a></p>
                       `;
    var prodAddr = [this.rData['emailByKey'][this.covererUserKey]];         // the PROD adderess array

    var mTA = {
      "Dev": ["flonberg@partners.org"],
      "Prod": prodAddr,
     }  
    var emp  = <emailParams> {                                              // params for sending an email 
      action: "sendEmail2",
      addr: { "Dev":["flonberg@partners.org"],
              "Prod":prodAddr
      },
      msg: message,
      subject: "coverage", 
      debug: 1                                                              // when 1 all emails go to flonberg
    }
    this.writeLog("storeCovererData", link1);
    this.genEditSvce.genPOST(emp).subscribe(                                // send the email to coverer nominee
      (res) => {
        console.log("res from sendEmail2 from storeCovererDate is  %o", res);
      });
    if (this.covererName.length &&  this.covererName.length > 0){
      const covererUserKey = this.find_rDataKey(this.rData.fromION, 'LastName',this.covererName)
    }
   /***********  Update the dataBase for the coverers   */
    const userKey = this.find_rDataKey(this.rData.fromION, 'LastName',this.covererName  ) // the UserKey of the coverer
    const upDateParams = <dB_POSTparams>{
      action:'editAndLog',
      tableName:'vacation3',
      whereColName:['vidx'],
      whereColVal:[this.items._data[this._id].vidx],
      editColNames: ['coverageA'],
      editColVals:  [userKey],                                               // store the UserKey of Coverer
      userid: this.userid,   
    };  
    this.genEditSvce.genPOST(upDateParams).subscribe(
      (res) => {
        console.log("res updateCoveresx" + res);
      }
    );
  }                                                                         // end of StoreCovererData 

  getNotice(UserId){
      const getParams = <dB_GETparams>{
        tableName:'notice',
        whereColName:['UserId'],
        whereColVal:[UserId],
        getColName:['vacMan', ]
      };
   this.genEditSvce.genDB_GET(getParams);
  }
  clickedFrom_rData: any;
     /*******************          This is called anytime the user RELEASES the mouse click          **********************/
     /*******************  The User clicking on a tA also triggers the timeLine SELECT function  line 672          e*******/
     /*******************  The script can get the DataSet id of the tA clicked on from the 'datums' DOM             *******/
  clicked(ev) 
  {
      if (document.getElementById('datums') && document.getElementById('datums').innerText.length > 0) 
      { 
           this._id = +document.getElementById('datums').innerText;     // _id of the item clickedOn in the DataSet
       /////////  this.items is a DataSet Object which has the _data property to contain my data \\\\\\\\\\
        if (!this.items._data[this._id])                                                         // click was NOT in a tA box;
          return;  
        if (this.items){
                  console.log("308 clicked item is %o",  this.items._data[this._id])
            this.showControls = true;                                                            // show editing controls
            this.drawEditControls = true;
            this._vidx = this.items._data[this._id].vidx;                                        // store the vidx for editing
            const rDataKey = this.find_rDataKey(this.rData.data, 'vidx', this._vidx);            // find the key of this vidx in the rawData 
            this.clickedFrom_rData = this.rData.data[rDataKey];                                   // get the row for this vidx from the rawData
            this.createEditForm(this._id);                                                       // create the form for editing the tA
            document.getElementById('vidx').innerText = this.items._data[this._id].vidx; // store the vidx for DELETE
            if (this.items && this.items._data[this._id].approved == 1 )
              this.helpArray = [' If you time away has been approved you can select a coverer.' ];
              else
              this.helpArray = ['Your Time Away must be approved before you cen select coverers'];      
            }                  
        }
          /*******  classify loggedInUser as tA this.rData.data[this.rDataKey].reasonIdx.toString() */     
       if (this.items && this.items._data[this._id] &&  this.items._data[this._id].className === this.userid) { // loggedInUser is tA owner 
           this._readonly = false;    
           if ( this.clickedFrom_rData['approved'] == 1 )                                                          // enable editing
              this.helpArray = [ "Your Time Away has been approved so you should select a coverer.",
                    "Choose a coverer from the drop down and then click 'Send Email To Coverer.",
                    "To edit you Time Away, make the changes and then click 'Submit Changes'."
                  ]; 
            else
                this.helpArray = [ "Your Time Away needs to be approved before you can select a coverer. "
              ]; 
            }
          else{                                                                                 // user is NOT tA owner
              this._readonly = true;                                                            // make controls readOnly
              this.helpArray = [ "Click on a TimeAway to see the details for tha TimeAway.",
                                "If TimeAway is in red, it means that now coverer has been nominated",
                                "Orange means that the coverer has not yer accepted the coverage.",
                                "Green means that the coverage has been accepted."
                              ]; 
           }

       if (this.userid === 'napolitano' ) {                                                     // official 'approver'
           this.isApprover = true;
         }

      /***********  Set Class for Coverers display,  according to Acceptance */   
      if (this.items && this.items._data[this._id]     )  { 
        if ( this.items._data[this._id]['covA_Duty'] == '1')                                    // coverage has been accepted
          this.coverageAclass = "Accepted";
          else
            this.coverageAclass = "NotAccepted"; 
      }
      /*
      var dParams = {              // create a set of this.insertP to b used by genDB_POST to delete the tA
      'tableName': 'vacation3', 'whereColName': 'vidx', 'whereColVal': document.getElementById('vidx').innerText,
      'editColNames':[],
      'editColVals':[],
      'action': 'editAndLog'                                     
    };
    */
   /*
    const dB_PP = <dB_POSTparams>{}                                                         // create instance of interface for a POST
      dB_PP.whereColName=['vidx'];                                                          
      dB_PP.whereColVal = [document.getElementById('vidx').innerText]                       // 

  if ( this.items &&  this.items._data[this._id] ){             // Ed/
          var startDateEdit = this.datePipe.transform(this.items._data[this._id].start, 'yyyy-MM-dd');
          var endDateEdit = this.datePipe.transform(this.items._data[this._id].end, 'yyyy-MM-dd');
          dB_PP.editColNames = ['startDate','endDate'];      
          dB_PP.editColVals = [startDateEdit ,endDateEdit ];
          dB_PP.action = 'editAndLog';
      }  
      */
    this.rDataKey = +this.find_rDataKey(this.rData.data, 'vidx', this._vidx)
          console.log("527 rDataK %o  and this.id is %o",   this.rData.data, this._id)
}                                                                                             /*******  end of clicked */

  /*********  find the key of the selected timeAway element in the rData so can find Coverers */
find_rDataKey(dataStruct, name, value){
  for( var prop in dataStruct ) {
      var tst = new String(dataStruct[prop][name]) ;                                          // need to do this to use indexOf()
      if (value && tst.indexOf(value.toString().trim()) !== -1)
              return prop;
    }
}  
     /*********  This is used by the New TimeAway  ***********/
  createForm() {                                                                                // create the form for New tA
    this.formG = this.fb.group({                          // fb is
      dateTo: ['', Validators.required ],
      dateFrom: ['', Validators.required ],
      reasonG: [''],
      noteG: ['']
    }, {validator: this.dateLessThan('dateFrom', 'dateTo', 'reasonG')}
    );
  }
editStartDate: FormControl;
dBstartDate: Date;
dBendDate: Date;
dBstartDateString: String;
dBendDateString: String;
dBcontent: String;
dBreason: String;
tst = "";
/*
  findCoverage(itemId){                                                    // 
    const vidx =  this.items._data[itemId].vidx;                          // get the vidx of tA clicked on in the DataSet
    const rDataKey = this.find_rDataKey(this.rData.data, 'vidx', vidx);   // find the key of this vidx in the rawData 
    const coverageA = this.rData.data[rDataKey].coverageA;                // get the 'coverageA' datum from the rawData
    if( this.rData.fromION[coverageA]){

      return this.rData.fromION[coverageA].LastName                         // return the LastName using fromION data. 
    }
  }
  */
  ////////   This triggered by clicked() and is where the data from the selected tA in the dataSet is loaded into the edit boxes. 
  ///////    Some params need to be fetched from the rData ds which is the raw data from the vacation3 table      //////
  
  createEditForm(_id) {                                                   // create the form for EDITING tA
    this.rDataKey = +this.find_rDataKey(this.rData.data, 'vidx', this._vidx) // get the key in rData for this tA
    if (this.clickedFrom_rData.coverageA)
      this.covererSelect.setValue( this.rData.fromION[ this.clickedFrom_rData.coverageA]['LastName']);   // set the value of the autoComplete Coverage widget
    else
      this.covererSelect.setValue('');  
    this.reasonSelectControl.setValue( this.rData.data[this.rDataKey].reasonIdx.toString() );  // set the Reason dropDown 
    this.dBcontent = this.items._data[this._id].content;
    this.dBstartDate = new Date(this.items._data[this._id].start);          // ref'ed by [ngModel] in datePicker
    this.dBendDate = new Date(this.items._data[this._id].end);              // sets [ngModel] of First Day Away widget
    this.dBendDate.setDate(this.dBendDate.getDate() - 1);                   // set edit field as LAST DAY AWAY.. ref'ed by [ngModel] in datePicker
    this.dBstartDateString = this.datePipe.transform(this.dBstartDate , 'M/dd/yyyy');   // used for readOnly date display widget 
    this.dBendDateString = this.datePipe.transform(this.dBendDate , 'M/dd/yyyy');
    const reasons = ['Personal Vacation', 'Other', 'Meeting'];
 //   this.dBreason = reasons[this.items._data[this._id].reasonIdx];
    var tst444 = this.rData.data
   if (this._readonly)
    this.dBreason = reasons[this.rData.data[this.rDataKey].reasonIdx ];
 

 
    var toDateRaw = this.items._data[this._id].start
    toDateRaw = toDateRaw.substring(0, toDateRaw.length - 10);;
    var fromDateRaw = this.items._data[this._id].end;
    fromDateRaw = fromDateRaw.substring(0, fromDateRaw.length - 10);
    if (this.items._data[this._id].note)
      this.shownNote = this.items._data[this._id].note;
  //  this.shownNote = this.items._data[this._id].note;
   /* this.formEdit = this.fb.group({                          // fb ison
      goAwayerBox: [ this.items._data[this._id].content],
      dateToEdit: [toDateRaw, Validators.required ],
      dateFromEdit: [fromDateRaw, Validators.required ],
      reasonGEdit: [''],
      noteGEdit: [ this.items._data[this._id].note]
    }, {validator: this.dateLessThan('dateFromEdit', 'dateToEdit', 'reasonGEdit')}
    );;
   */
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
  cancelNewTA(){
    console.log("cancel newTA");
    this.newTimeAway2 = false;
  }
  onSubmit()                              /*********  used for New Time Aways  */
  {
        /*********     Add to dataBase  **********************/
        if (+this.loggedInRank < 5 )
          this.helpArray = ['Your Time Away needs to be approved before you can select coverage. '];
        var advEndDate = this.formG.value.dateTo
        var advStartDate = this.formG.value.dateFrom
        advEndDate.setDate(advEndDate.getDate() + 1);       // User is used to entering lastDayAway as end of tA, no need to advance for dB and dataSet
        const advStartDateString = this.datePipe.transform(advStartDate, 'yyyy-MM-dd'); 
        const advEndDateString = this.datePipe.transform(advEndDate, 'yyyy-MM-dd'); 
        const insertP = <SinsertParams>{};                                // create instance of interface for SinsertParams for gen-service
          insertP.tableName = 'vacation3';
          insertP.action = 'insertRecGen';
          insertP.colName  = ['startDate', 'endDate' , 'reason', 'note', 'userid', 'approved'];  // names of columns to INSERT
          insertP.colVal = [advStartDateString,  // colValues 
          advEndDateString, this.formG.value.reasonG,
          this.formG.value.noteG, this.rData['loggedInUserKey'], '0'];
        const link =this.genEditSvce.urlBase +`/approveTA.php?goAwayerUserKey` + this.rData['loggedInUserKey'];       // Need to get the vidx just added/
        console.log("544  insertP is %o", insertP);
            /***********  enter newTA in dataBase  */
      this.genEditSvce.genPOST(insertP)
        .subscribe(                                          
        (response) => {
          this.retFromPost(response);                         // loads params of justInserted tA and sends email to Brian
          this.rand = Math.random();
         // this.ngOnInit();
          window.location.reload();
        })    
  }

 /**********  Use the param returned from Insert POSt to add newTA to DataSet  */
  retFromPost(s){
    this.ret = s;                                             // stores the vacation3 vidx to a
    var idx = s.lastID;
    this.lastInsertIdx = s['lastID'];
           /************  send NeedToApprove Email -- must be in subscribe to get lastInsertIdx. */
    if (this.rData.loggedInUserRank < 5){   
      const link11 = this.genEditSvce.urlBase +`/approveTA.php?vidx=` + this.lastInsertIdx   ;
      console.log("600  link1 for retFromPost is " + link11);
        var emp = {                                         // params for email 
            action:"sendEmail2",
            addr: {"Dev":["flonberg@partners.org"],
                    "Prod":["bnapolitano@mgu.harvard.edu"]
                  },
            msg:`<html> <head><title> Vacation Coverage Acknowledgment </title></head>
            <p> ` + this.rData['fromION'][this.rData.loggedInUserKey]['FirstName'] + `  ` + this.rData['fromION'][this.rData.loggedInUserKey]['LastName']  + 
            ` has scheduled a Time Away, from ` + s['startDate']   +  ` returning on `  + s['endDate']   +      `</p>
            <p> You can approve this Time Away using the below link: </p>
            <a href=`+ link11 + `> Approve Time Away. </a>`,
            subject: "New Time Away ",
            debug: 1
            };
          this.genEditSvce.genPOST(emp).subscribe(
              (res) => {
                console.log("res from sendEmail2 %o", res);
              }
            );
          }
      //this.genEditSvce.writeLog("new tA entered vidx is " + this.lastInsertIdx);
    return idx;
  }
  setQueryParams(qP) {
    if (qP.userid) {
      this.userid = qP.userid;
      console.log(" 655  dddd %o", this.userid);
      this.genEditSvce.setUserId(qP.userid);                                            // pass the userid to gen-edit for use in REST svces
      this.genEditSvce.writeLog("timeLine").subscribe(
        (res) => {
          console.log("546 ret from writeLog %o ", res);
        }
      )

      this.showPhysURL = "https://whiteboard.partners.org/esb/FLwbe/AngProd/dist/material-demo/index.html?userid=" + qP.userid + " &param=1";
      this.showPhysURL = "https://whiteboard.partners.org/esb/FLwbe/AngProd/dist/material-demo/index.html?userid=schneider";
      this.showDosimURL = "https://whiteboard.partners.org/esb/FLwbe/AngProd/dist/material-demo/index.html?userid=" + qP.userid + " &param=2";
      this.showDosimURL = "https://whiteboard.partners.org/esb/FLwbe/AngProd/dist/material-demo/index.html?userid=ske5";
    
   }
    else {
      this.userid = this.genEditSvce.userid;
    }
    if (qP.param){
      this.param='param=1';
      this.showPhysicist = "Show Dosimetrists";
    }
    else if (qP.param){
      this.param='param=2';
      this.showPhysicist = "Show Physicists";
    }
    else 
      this.showPhysicist = "Show Physicists";
    if (qP.platform) {
      this.platform = qP.platform;
      console.log("timeLine platform " + this.platform);
    }
  }
  ngAfterViewInit() {
    if (this.timelineContainer  ) {
      this.tlContainer = this.timelineContainer.nativeElement;
    }
  }
  items: any;
  tAO: any
  getTimelineData2(mode) 
  {

    /***********   set the startDate and endDates for collecting enuff data for everyone to be in the dataStructure    ***************/
    const numWeeks = 5;                                                                 // number of weeks to show on the calendar
    const todayDate = new Date();
    const startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);         // move to first day of current month
    const endDate = new Date();  
    this.rData = new Array();
                                                      // create new date to use for end                            
    endDate.setMonth(startDate.getMonth() + 4);                                         // set a date to be the forward date of data collection
    startDate.setMonth(startDate.getMonth() - 1);                                       // set date for backward data collection far enough back to get all users
    this.startDateString = this.datePipe.transform(startDate, 'yyyy-MM-dd');            // format it for dataBase startDate for getting tAs
    this.endDateString = this.datePipe.transform(endDate, 'yyyy-MM-dd');                // mm for endDate
    /****************   set the dates for showing on the calendar as the first of current month and forward 8 weeks  ******************/
    var startDateShown = new Date();    // move to first day of current month for showing
    var endDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);      // move endDateShown foward 8 weeks from startDateShown
    endDateShown.setDate(startDate.getDate() + numWeeks * 8);   
    var url = 'REST_GET.php?action=getTAs&userid=' + this.userid;                       // userId used to switch between Dosim and Phys
    this.items = null;
    this.groups2 = null;
    this.items = new vis.DataSet();                                                     // for tAs
    this.groups2 = new vis.DataSet();                                                   // for Groups;
    this.groups2Array = new Array();                                                    // Array to keep track of if added to groups2
  
    if (this.param)
      url += this.param;                                                                // add route query params
    this.genEditSvce.genGet(url).subscribe(
      (val) => {
      //  if (this.index === 0) 
        {    
          this.rData = val;
          console.log("737  rData %o", this.rData);
          this.rData.data = this.myBubsort(this.rData.data);                            // alphabetize by LastName, rData.data is tAs
          if (this.rData.fromION[this.rData['loggedInUserKey']]){
            this.loggedInLastName = this.rData.fromION[this.rData['loggedInUserKey']]['LastName'];  // used for mail messages
            this.loggedInFirstName = this.rData.fromION[this.rData['loggedInUserKey']]['FirstName'];    
          }                                    
        }
        for (let key in this.rData.Rusers) {                                            // load the UserName into autoComplete array
          let value = this.rData.users[key];
            this.foptions.push( key)
             }
        
                /*****           process data and add to TimeLine DataSet             */
        var setId = 1;                                                                  // used to incement id for adding to DataSet                            
        var styleTxt= 'background-color:rgb(195,195,195);';                             // default style
        console.log("818 %o", this.rData);
        console.log("601  isSafari is %o ", this.isSafari)
        for (var key2  in this.rData['data'])
        {
            if (this.rData['data'][key2]['start'])
            {             // Date is stored in dB as OBJECT so cannot be directly used in  datePipe,  so need to make a new TypeScript Date. 
              var stDate = new Date(this.rData['data'][key2]['start'].replace(/\s/, 'T') )     //  fix for fussy Safari
              if (this.isSafari)
                stDate.setDate(stDate.getDate() + 1);                       // correct for faulty Safari date conversion. 
              var startDateArg= this.datePipe.transform(stDate, 'yyyy-MM-dd') + "T04:00:00Z" ;    // this used for timeLine DataSet, the T04:00.. makes blocks come out at midnight
               //    console.log("607 date from dB is %o date from new Date is %o",this.rData['data'][key2]['start'], startDateArg )
            }

            if (this.rData['data'][key2]['end'])   {                                                   // NOT a weekend
              var eDate = new Date(this.rData['data'][key2]['end'].replace(/\s/, 'T')  )      // this.rData[key][key2]['start']fix for fussy Safari
              console.log("615  arg for new Date is %o  new date is %o ",  this.rData['data'][key2]['end'].replace(/\s/, 'T') ,  eDate)
              if (this.isSafari)
                eDate.setDate(eDate.getDate() + 1);      
              var endDateArg= this.datePipe.transform(eDate, 'yyyy-MM-dd') + "T04:00:00Z" ; 
            }
          if ( this.rData['data'][key2]['content'])                                                        // 'content' is the datum which appears in timeLine box
          {
                           //******* set the color code for approved, covered, and coverageAccepted   *****/
            if (   this.rData['data'][key2]['userkey'] > 0  )                                      
            {                                         
              if (   (!this.rData['data'][key2]['rank']   ||  +this.rData['data'][key2]['rank'] < 5   ))     // if user is a Dosimetrist 
              {          
                styleTxt= 'background-color:rgb(230,230,230);';                                    // default backgound = grey, will apply to all non dosimetrists
                if (+this.rData['data'][key2]['approved'] == 0 && +this.rData['data'][key2]['userkey'] !== 58  )                                     // if NOT approved
                  styleTxt = 'background-color:white;'
                else if ( +this.rData['data'][key2]['coverageA'] > 0    )                           // if there IS a coverer
                {
                   if (+this.rData['data'][key2]['covA_Duty'] == 1)                                  // if has accepted overage
                      styleTxt +='background-color:green;'
                   else                                                                           // coverer NOT accepted
                      styleTxt +='background-color:orange;'
                }
                else   
                    styleTxt +='background-color:red;'
              }
              var tst = this.rData['data'][key2]['vidx'] ;
              var group2Badded = this.groups2Array.indexOf(this.rData['data'][key2]['content'] ) ;   // Check is this user already has a group
              if (group2Badded == -1 ){                                                           // It is NOT a user it is a Weekend
                this.groups2Array.push(this.rData['data'][key2]['content']);                         // add the group for this user
                this.groups2.add({id: this.groups2Array.indexOf(this.rData['data'][key2]['content']) , content: this.rData['data'][key2]['content']})    
                group2Badded = this.groups2Array.indexOf(this.rData['data'][key2]['content'] ) ;     // use for the 'group' datum of the dataSet
              }
              else {                                                                              // weekend
                this.rData['data'][key2]['type']= 'background';                                      // add 'type' for shading
              }
            }
            //************    create the tAO object to add to the DataSet      *************/
            if (   +this.rData['data'][key2]['userkey'] > 0  ){                                     // normal nonWeekend tA.  tAO is object toB added to dataSet
             this.tAO = { id: ++setId, content: this.rData['data'][key2]['content'], start: startDateArg,
                style:styleTxt,
                end: endDateArg, group:  group2Badded, vidx:this.rData['data'][key2]['vidx'],
                reason: this.rData['data'][key2]['reason'], note: this.rData['data'][key2]['note'],
                className: this.rData['data'][key2]['className']}  
            }   
            else {                                                                              // make a tAO for a weekend
              this.tAO = { id: ++setId,  start: startDateArg,
                className:this.rData['data'][key2]['className'],
                end: endDateArg,  type:'background',
                }  
            }         
            this.items.getDataSet().add(this.tAO);                                              // add the new tAO to dataSet. 
      
          }
      }
      console.log("605 DataSet is %o", this.items)
      if (!this.timeline)
      this.timeline = new vis.Timeline(this.tlContainer, this.items, {});                       // create the timeLine
      this.timeline.setOptions(this.options);                                                   // set the timeLine Options
      this.timeline.setGroups(this.groups2);                                                    // set the timeLine groups
      /********************************************************************************************************************************************************/
      //********* SELECT function triggered by the user clicking on a tA, loads the id of the clickedOn tA in a DOM for use by the rest of the script. ********/
      /********************************************************************************************************************************************************/
      this.timeline.on('select', function ( properties ) {                                      // whenever user clicks on a box in the timeLine
        document.getElementById('datums').innerHTML = properties.items  ;                       // properties.items is the _id of the item in the DataSet                                                                                   // store the _id in the DOM for use by Angular to do edits ...
        });
      }
    );
    
    this.options = {
      selectable: true,
      groupOrder: function (a, b) {
        return a.value - b.value;
      },
      start: startDateShown,
      end: endDateShown,
    };
  }                                                                                             // end of getTimeLineData

 myBubsort(array){                                            // sort by LastName 
  array = array.slice(); // creates a copy of the array
  for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length - 1; j++) {
          if(array[j]['LastName'] > array[j + 1]['LastName']) {
              let swap = array[j];
              array[j] = array[j + 1];
              array[j + 1] = swap;
          }
      }
  }
  return array;  
 }
 
  

  sendDeleteEmail(){
    if (+this.rData.loggedInUserRank == 0){
      const addrArray = Array("flonberg@partners.org", "bnapolitano@partners.org")
      const emp = {
        action: "sendEmail2",
        subject: "Time Away Deleted",
        msg: "The Time Away for " + this.items._data[this._id]['content'] + " starting "  + this.items._data[this._id]['start'].substr(0, 10) +
          " ending " + this.items._data[this._id]['end'].substr(0, 10) + " has been deleted. ",
        addr: { "Dev":["flonberg@partners.org"],
                "Prod":["flonberg@gmail.com"]
              },
      }
      this.genEditSvce.genPOST(emp).subscribe(
        (res) => {
          console.log("res from sendEmail2 %o",  res);
          }
        );
    }
  }
  /*********  used to store values from (blur) of input widgets         */
  editColNames = [];
  editColVals = [];
  needStartEmail = false;
  needEndEmail = false;
  newStartDate = String;
  newEndDate = String;
  newReasonIdx = 1;
  EDO = { "OldStartDate": '',                                // used for email 
                  "NewStartDate": '',
                  "OldEndDate": '',
                  "NewEndDate": '',
                }
  covererSelected = false;
  storeEdit(type,e){                                                              // called by (dateChange) in DatePicker
    console.log("951 %o", e);
    if (type == 'coverer')
      this.covererSelected = true;
 //   this.editColNames[0] = 'approved';
    this.editColNames = [];
    this.editColVals = [];
    this.showSubmitChanges = true;

    if (e.value){
          console.log("date Entered %o", e.value);
          let newDate = new Date(e.value);
          let startDateString = this.datePipe.transform(newDate, 'yyyy-MM-ddT00:00:00Z');  
          let startDateStringForEdit = this.datePipe.transform(newDate, 'yyyy-MM-dd');  
          newDate.setDate(newDate.getDate()+ 1);                  // Wrong time is entered by DatePicker
          let endDateString = this.datePipe.transform(newDate, 'yyyy-MM-ddT00:00:00Z');  
          let endDateStringForEdit = this.datePipe.transform(newDate, 'yyyy-MM-dd'); 
          this.needStartEmail = true; 
          this.EDO.OldStartDate = this.items._data[this._id]['start'].slice(0,10);
          this.EDO.NewStartDate = <string>startDateStringForEdit 
          this.EDO.OldEndDate = this.items._data[this._id]['end'].slice(0,10);
          this.EDO.NewEndDate = <string>endDateStringForEdit 
          if (type=='startDate'){
            this.needStartEmail = true;
            this.items.update({id: this._id, start: startDateString});  
            this.editColNames.push("startDate");
            this.editColVals.push(startDateStringForEdit)
            this.editColNames.push("approved");
            this.editColVals.push('0')
          }
          if (type=='endDate'){
            this.needStartEmail = true;                                     
            this.items.update({id: this._id, end: endDateString});   // live update to timeLine does not work in Safari
            this.editColNames.push("endDate");
            this.editColVals.push(endDateStringForEdit)
            this.editColNames.push("approved");
            this.editColVals.push('0')
          }
          if (type == 'reason'){
            this.editColNames.push("reasonIdx");
            this.editColVals.push(+e.value)
          }
          console.log("958 %o", this.items);

    }
    else  if (e.target){
        this.editColNames.push(type);
        this.editColVals.push(e.target.value);
        const dateForDataSet = e.target.value + "T00:00:00Z"; 
        if (type=='startDate'){
          this.needStartEmail = true; 
          this.EDO.OldStartDate = this.items._data[this._id]['start'].slice(0,10);; 
          this.EDO.NewStartDate = e.target.value; 
          this.items.update({id: this._id, start: dateForDataSet});                // for use in the email to Brian

          this.items.update({id: this._id, style: 'font-size:8pt; background-color:#d9dcde;color:red;'}); 

        }
        if (type=='endDate'){
          this.needStartEmail = true;
          this.EDO.OldEndDate = this.items._data[this._id]['end'].slice(0,10); ; 
          this.EDO.NewEndDate = e.target.value; 
          this.items.update({id: this._id, end: dateForDataSet});   
          this.items.update({id: this._id, style: 'font-size:8pt; background-color:#d9dcde;color:red;'});   
        }
        if (type == 'coverer'){
          this.covererName = e.target.textContent;
          this.editColNames = ['coverageA'];
          this.editColVals =[this.covererName]
        }
        var str = "approved";  
   
        // use of Constructor Property 


    }
  }
  saveEdits(param?){
   // this.editColNames.shift();                                 // remove garbage zeroth element
  //  this.editColVals.shift();
    var eP  = {
      action:'editAndLog',
      tableName:'vacation3',
      editColNames:this.editColNames,
      editColVals:this.editColVals,
      whereColName:['vidx'],
      whereColVal:[this.items._data[this._id]['vidx']],
      userid:this.userid
    }
    if (param == 'del') {                                          // user clicked Delete Button
      eP.editColNames=['reasonIdx'];                                // sel editColName 
      eP.editColVals= ['99'];
      this.items.remove({id: this._id })
    }
    if (this.needStartEmail)
      this.sendStartOrEndDateEmail();
    this.genEditSvce.genPOST(eP).subscribe(
      (res) => {
        console.log("res from updatel %o",  res);
      }
    );
   // if (param !== 'del')
       this.ngOnInit();
    if (this.isSafari)
       window.location.reload();
  }
  sendStartOrEndDateEmail(){
    var link33 = this.genEditSvce.urlBase +`/approveTA.php?vidx=` + this.items._data[this._id].vidx;    // the link to the approval php script
    if (this.needStartEmail){                   
      var msg = "<p>The  Time Away of " + this.items._data[this._id]['content'] + ' has changed';
      if (this.EDO.NewStartDate.length > 2 ){
        msg += " from Start Date of " + this.EDO.OldStartDate + " to new Start Date of " + this.EDO.NewStartDate +',';
      }
      if (this.EDO.NewEndDate.length > 2 ){
        msg += " from End Date of " + this.EDO.OldEndDate + " to new End Date of " + this.EDO.NewEndDate +',';
      }
      msg += "</p> <p> To approve this change click on a <a href=" + link33 + "> Approve Change </a>" 
      var emp = { 
        action:"sendEmail2",
        addr: { "Dev":["flonberg@partners.org"],
                "Prod":["bnapolitano@mgh.harvard.edu"]
              },
        msg: msg,
        subject: "Time Away Change",
        debug: 1                                                    // change to '0' to send email to actual recipients
        };
      this.genEditSvce.genPOST(emp).subscribe(
          (res) => {
            console.log("res from sendEmail2 %o", res);
          }
      );
    }
  }
  getReason()                                                   // validates the form and enables the Submt Button
  {
  //  this.gotReason = true;
    if ( this.formG.value.dateTo &&  this.formG.value.dateFrom && this.formG.value.dateFrom <= this.formG.value.dateTo )
      this.formValidation = true; 
  }
  setNewTimeAway2(){
    this.newTimeAway2 = true;
    this.helpArray = [
      'Start Date, End Date and Reason must be entered before',
       'new Time Away can be Submitted.  '
    ];
  }
  storeDate(type: string, event: MatDatepickerInputEvent<Date>) {
    var loc = event;
    if ( this.formG.value.dateTo && this.formG.value.dateFrom > this.formG.value.dateTo)
      this.endBeforeStart = true;  
    if ( this.formG.value.dateTo && this.formG.value.dateFrom <= this.formG.value.dateTo)
      this.endBeforeStart = false;  
  }
  setCovererClass(){
    if (+this.rData.data[this.rDataKey].covA_Duty == 1)
      return("covered");
    else
      return("notCovered")  
  }
/*
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
  */
 /*

  */
  
  /**************  format date as yyyy-mm-dd  for dataBase ********************/
  /*
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
  */

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
  /*
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  makeDateLabels(){
    const dName = ["Mon","Tues","Wed","Thurs","Fri"];
    const mName = ["Jan.","Feb.","Mar.","Apr.","May.","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];
    var sDate = new Date(this.data2._data[this._id].start); 
    const vidx = this.data2._data[this._id].vidx;
    const goAwayerUserKey = this.data2._data[this._id].userkey;
    this.dateLabels = Array();
    var day = sDate.getDay()-1;
    var date = sDate.getDate();
    var monthNum = sDate.getMonth()-1;
    console.log("date " + dName[day]);
    for (let i = 0; i < 15; i++){
     // var dateString = this.datePipe.transform(sDate,"yyyy-dd-dd");
      var dateString = this.formatDate(sDate);
      if (dName[day]){
        this.dateLabels.push( {"dayName": dName[day], "date": date, 
          "monthName":mName[monthNum], "dateString":dateString,"dayOfTA":i,
          "vidx":vidx, "goAwayerUserKey": goAwayerUserKey});
      }
      sDate.setDate(sDate.getDate() + 1);
      if (sDate > new Date(this.data2._data[this._id].end))
        break;
      day = sDate.getDay()-1;
      date = sDate.getDate();
      monthNum = sDate.getMonth();
    }
    console.log("dateLabels is %o", this.dateLabels);
  }
  */
 /**********  make a dataStructure to hold all names of tA holders  */
  /*
  setGroups(s) { 
    console.log("761   loggedInUserRank %o", this.rData.loggedInUserRank );                                                         // s is the timeline dataSet
    this.nameList = new Array();
    this.groupsArray = new Array();

    for (let i = 0; i < s.length; i++) { 
      if (s._data[i] && this.nameList.indexOf(s._data[i].content) < 0) {                 // if name is not already in the dS
        this.nameList.push( s._data[i].content);                           // put it in the list of Names for the timeLins
       // this.nameToUserId[i] = { lastName: s._data[i].content, userid: s._data[i].userkey };  // make dS of lastName paired with  userkey
        this.useridToUserkeys[i] = { userid: s._data[i].userid, userkey: s._data[i].userkey };// dS of userid paired with userkey
        this.contentArray[s._data[i].userkey] = s._data[i].content;         // used to get 'content' param to add to dataSet.
      }                         }
    this.nameList.sort();                                                 // alphabetize the nameList
    const index = this.useridToUserkeys.map(function(e) { return e.userid; }).indexOf(<string>this.userid);  // find arrayIndex of userId    
    if (this.useridToUserkeys[index]) {                              // Someone may use page who is NOT a goAwayer. 
      this.userkey = this.useridToUserkeys[index].userkey;  
      this.loggedInLastName = s._data[index].LastName;
      this.loggedInFirstName = s._data[index].FirstName;
      }                 // the userKey of the loggedIn user
  }
 
  assignGroups() {                                                     // put each tA in proper group.
    console.log("840  thid.data2 %o", this.data2)
    for (const property in this.data2._data ) {                         // property is the key of the dataStructure which is the 
      if (+this.data2._data[property]['userkey']  == 0) {
       this.data2._data[property]['content'] = '';   
       delete  this.data2._data[property]['group']                            
        continue;
      }
    
      if (this.data2._data.hasOwnProperty(property)) {                // 'hasOwnProperty' is typescript to see it a p is in arry
        this.data2._data[property].group = this.nameList.indexOf(this.data2._data[property].content);  // set the correct groupNumber
    //  if (this.data2._data[property].approved === 1) {
      //    this.data2._data[property].style = 'color:green';
      //  }
        }
      }

    
  }
    formatDateYYYymmdd(date) {
 //   const date = new Date(d);
    var day = date.getDate();
    var y = date.getFullYear();
    y = Math.abs(y);                                  // Safari yields a negative number
    console.log("649 y is %o", y);
    var m = date.getMonth() + 1;
    if (m  < 10)
      var mStr = "0" + m;
    else 
      var mStr = "" + m;  
    if (day  < 10)
      var dStr = "0" + day;
    else 
      var dStr = "" + day;    
    var fD = y + '-' + mStr + '-' + dStr;
    console.log("660 fD is " + fD);
    return fD;
  }
  */
 /*
editGen(type: string, event: any) 
{                                  // editGen is used for ALL fields
 console.log("editGen");
    var dateForDataSet = ''; 
   const shownId = this._id;
   var messageUsed = ""; 
    if (type =='start' || type =='end'){                                  // if it is a date
       messageUsed  = "The " + type + " date of the Time Away for " + this.items._data[this._id]['LastName'] + " has changed  from "
      + this.items._data[this._id]['start'].substr(0, 10) +  " to " + event.target.value + 
      ". You can approve this change by clicking on <p><a href=" + link33 + "> Approve Change </a></p>";

      dateForDataSet = event.target.value + " 00:00:00";                 // make a date for dataSet
    }
    if (event.target && event.target.value)                               // the editColVal can be a target.balue
      this.dB_PP.editColVals = [ event.target.value];
    if (event.value)                                                      // or it can be an event.value
      this.dB_PP.editColVals = [ event.value];
    console.log('edtied local ');
    if (type == 'reason'){
      this.dB_PP.editColNames = ['reason'];
      this.items.update({id: this._id, reason: dateForDataSet});  
    }
   
   if (type !== 'del'){       
    var link33 = this.genEditSvce.urlBase +`/approveTA.php?vidx=` + this.items._data[this._id].vidx;
    var emp = { 
              action:"sendEmail2",
              addr: {"Dev":"flonberg@partners.org",
                      "Prod":"flonberg@gmail.com"
                    //  "Prod":"bnapolitano@partners.org"
                    },
              msg: messageUsed,
              subject: "Time Away Change"
              };
      console.log(" 865 emp %o ", emp) ;       
      this.genEditSvce.genPOST(emp).subscribe(
                (res) => {
                  console.log("res from sendEmail2 %o", res);
                }
              );
    }
    if (type === 'start' ) {
      this.items.update({id: this._id, start: dateForDataSet});           // do the local update
      this.items.update({id: this._id, style:'color:red' })
      this.startDateEdited = true;
      this.dB_PP.editColNames = ['startDate','approved'];
      this.dB_PP.editColVals.push('0');
      this.dB_PP.needEmail="dateChange";
    }                                                                   // update startDate
    if (type === 'end') {
      emp.msg = "The end date of the Time Away for " + this.items._data[this._id]['lastName'] + " has changed  from " + this.items._data[this._id]['end'].substr(0, 10) +
        "to " + event.target.value  +". You can approve this change by clicking on <p><a href + " + link33 + "> Approve Change </a> </p>";
   
      this.items.update({id: this._id, end: dateForDataSet}); 
      this.items.update({id: this._id, style:'color:red' })
      this.endDateEdited = true;
      this.dB_PP.editColNames = ['endDate','approved'];
      this.dB_PP.editColVals.push('0');
      this.dB_PP.needEmail="dateChange";
    }
    if (type == 'note'){
      this.dB_PP.editColNames = ['note'];
      this.dB_PP.editColVals = [ event.target.value];
    }
    if (type == 'del'){
      this.drawEditControls = false;
      this.dB_PP.editColNames = ['reasonIdx'];
      this.dB_PP.editColVals = [ '99'];
      this.items.remove({id: this._id })
    }
    if (type == 'approve'){
      this.dB_PP.editColNames = ['approved'];
      this.dB_PP.editColVals = [ '1'];
      this.items.update({id: this._id, style:'color:orange' })
    }
    this.dB_PP.action='editAndLog';
    this.dB_PP.userid = <string>this.userid;
    console.log("839 this.dB_PP %o", this.dB_PP);
    this.genEditSvce.genDB_POST(this.dB_PP);                              // do the dB edit.
}                                                                         // end of editGen
*/
/*
  removeBads(){
    for (let key in this.items._data){
      if (this.items._data[key].start > this.items._data[key].end){
        delete this.items._data[key];
      }
    }
  }
  */
   /*
  setColorForCoverage(s){
    if ( s && s == 1)
      return 'covered';
    else
      return 'notCovered';  
  }*/
  /*
  closeModal(){                                                             // trig by  cancelNotice()
    document.getElementById('noticeModal').style.display = "none"; 
  }

  cancelNotice(){                                                           // 
    console.log('cancel Notice');
    const gP = <dB_POSTparams>{
      tableName: 'notice',
      whereColName: ['UserId'],
      whereColVal: [this.userid],
      editColNames: ['vacMan'],
      editColVals: ['1'],
      userid: this.userid,
      action: 'editAndLog',
      insert: true
    }
    this.genEditSvce.genDB_POST(gP);
    this.closeModal();
  }
  */