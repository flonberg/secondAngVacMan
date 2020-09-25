import { GenEditService, SinsertParams, dB_GETparams, dB_SimpleGETparams, emailParams, InsertParams, dB_POSTparams } from './../gen-edit.service';
import { SeditParams } from './../gen-edit.service';
import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DatePipe, KeyValue } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { throwMatDialogContentAlreadyAttachedError, matDatepickerAnimations } from '@angular/material';
import { throwIfEmpty } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

declare var require: any;
const vis = require('../../../node_modules/vis/dist/vis.js');
/*
interface editsInt  {
  name: String;
  value: String;
}
*/
/*
interface newTAparams {
  startDate: string;
  endDate: string;
  reason: number;
  Note: string;
}
*/
interface nameToUserId {                        // used to setGroups
  lastName: string;
  userid: string;
}
interface useridToUserkey {                     // userd in setGroups
  userid: string;
  userkey: number;
}
interface dN {
  dayName:string;
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
rData:any;
  nominatedCoverer: number;
  nominatedCoverer2: number;
  nomCoverers: [];
  covererDates= [];
  covererName = "";
  covererName2 = "";
  covererUserKey: number;
  covererUserKey2: number;
  showPhysURL: string;
  showDosimURL: string;
  shownNote: string;
  
  showCoverers = false;
  showSendEmailToCoverers = false;
  dB_PostParams: dB_POSTparams
  tlContainer: any;                                     // the div for the timeLie
  timeline: any;
  data2: any;                                           // the dS for the tA data
  options: {};                                          // options for timeLIne
  groups: any;
  groups2: any;                                         // for Group DataSet
  groupsArray: any;
  groups2Array: String[];
  contentArray: any;
  redraw: boolean;
  showSubmitChanges: boolean;
  itemNum: string;
  qP: any;                                              // used to receive queryParams
//  idSel: String;
  userkey: number;
  reasons = ['Personal Vacation', 'Other', 'Meeting'];
  masterArray = ['This new page is part of upgrade of Whiteboard.',
  'If you have difficulties or questions concerning the page, please email to flonberg@partners.org.',
  'There is a button for Help in the lower right corner of the page. '
                ];
  helpArray = [ 'To zoom the calendar scroll within the calendar.',
                'You can also pan the calendar by placing mouse in calendar and moving horizontally.' ,
                'To edit your Time Away click on that Time Away. ', 
                'If you have difficulties or questions concerning the page, please email to flonberg@partners.org.'  ];
  noticeColName='vacMan';
  noticeModalComonentID='vacManModal'
  reason: String;
  startDate: FormControl;
  endDate: FormControl;
  reasonFC: FormControl;
  notesFC: FormControl;
  deleteControl: FormControl;
  dateFrom: FormControl;
  goAwayerName: FormControl;
  endBeforeStart: boolean;
  gotReason: boolean;
  tAstartDate: any;
  tAendDateObj: [{}];
 // reasonStrings: String[];
  nameList: String[];                                   // list of names appearing in data for forming groups
  userid: String;
  _readonly: boolean;
  showControls: boolean;
  _id: number;
  _content;                                           // store the item.content from click
  drawControls = true;
  drawEditControls = false;
  isApprover: boolean;
  reasonSelect = '';                                  // the reason from dataBase
  newTimeAwayBool = false;
  saveTimeAwayBool = false;
  showPhysicist :String;
  param: String;
  /*
  newTAparams: newTAparams = {
    startDate: '',
    endDate: '',
    reason: -1,
    Note: ''
  };
  */
  dB_PP: dB_POSTparams = {                          //  create instance of interface
    tableName:'vacation3',
    whereColName:[],
    whereColVal: [],
    editColNames: [],
    editColVals: [],
    userid: '',
    action: '',
    needEmail: '',
    email: {
      mailToAddresses: [],
      msg: '',
      subject:''
    }
  }
  insertP: SinsertParams = {
    tableName:'',
    colName: [],
    colVal: [],
    userid: '',
    action:'',
    email: {
      mailToAddresses: [],
      msg: '',
      subject:''
    }
  }
  storedEdits = [{}]                                // store values from startDate, endData, reason, note from user entries. 


  /*
  SinsertPP: SinsertParams = {
    tableName:'vacation3',
    colName:['startDate', 'endDate' , 'reason', 'note', 'userid'],
    colVal:[]
  }*/
 // sEPP: SeditParams;
 loggedInLastName: string;
 loggedInFirstName: string;
 loggedInRank: string;
 isLoggedInUserDosimetrist: boolean;
  nameToUserId: nameToUserId[];
  useridToUserkeys: useridToUserkey[];
  startDateEdited: boolean;
  endDateEdited: boolean;
  reasonEdited: boolean;
  seP = <SeditParams>{};  // define instance of SeditParams interface
  _vidx: string;
  endDateString: string;
  startDateString: string;
  //endDateShownString: string;
  //startDateShownString: string;
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
  dateLabels: any;
  covererToggle: boolean;
  coverageAlastName: string;
  coverageAclass:string;
  coverageBclass:string;
  coverageA_isLoggedInUser:boolean;
  coverageB_isLoggedInUser:boolean;
  keyFromQP: number;
  ret: any;
  lastInsertIdx: any;
  events: any;
  rDataKey: number;


  myControl = new FormControl();
  foptions: string[] = [];
  filteredOptions: Observable<string[]>;


  constructor( private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private datePipe: DatePipe, private fb: FormBuilder) {  

      this.ret = 1;
    this.dateLabels = [];
    this.nomCoverers = [];
 //   this.redraw = true;
    this.showControls = false;                            // *ngIf condition for the controls section
    this._readonly = true;
    this.isApprover = false;
    this.nameToUserId = [ {lastName: '', userid: ''} ];
    this.useridToUserkeys = [{ userid: 'Unknown', userkey: 0 }];
    this.contentArray = [];
    this.newTimeAwayBool = false;                               // enable editing of existing tAs
    this.showSubmitChanges = false; 

  
  
   // this.seP.whereColName = 'vidx';
  //  this.seP.tableName = 'vacation3';
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
    this.covererToggle = true;
    this.covererUserKey = -1;
    this.covererUserKey2 = -1;
    this.keyFromQP= -1;
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.foptions.filter(option => option.toLowerCase().includes(filterValue));
  }


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    this.endBeforeStart = false;
    this.gotReason = false;
    console.log(" this.router.url is   "   + this.router.url   + "server is " +  window.location.href);
    this.activatedRoute                                             // point to the route clicked on
    .queryParams                                                    // look at the queryParams
    .subscribe(queryParams => {                                     // get the queryParams as Observable
      this.qP = queryParams;
      this.setQueryParams(queryParams);
   //   this.seP.who = this.userid;
      this.getTimelineData2(0);                                      // get the data from REST database call.
      const getParams = <dB_SimpleGETparams>{                               // set the parameters for the genDB_GET interface
        action:'simpleGet',
        tableName:'notice',
        whereColName:'UserId',
        whereColVal: this.userid,                                  // the UserId of the loggedInUser
        getColName:'vacMan', 
        };
        this.genEditSvce.simpleGet(getParams).subscribe( val=>{         // get the datum from the notice table
          this.notice = val;                                      // save the resule
          if (this.notice &&  this.notice['vacMan']== 0)          // it r 0
           document.getElementById('noticeModalComponent').style.display = "block";     // sNEED VAR = MODAL ID 
          if (!this.notice ) {         // it NOT FOUND or 0
            if (   document.getElementById('noticeModalComponent') )
              document.getElementById('noticeModalComponent').style.display = "block";  
            const tP = <InsertParams> {
              action: 'insertRecGen',
              tableName: 'notice',
              colName: ['vacMan', 'UserId'],
              colVal:['0',<string>this.userid,]
            }  
            this.genEditSvce.genPOST(tP)
            .subscribe(                                          // can't subscribe to POST REST calls ?????
            (response) => {
              this.lastInsertIdx = response;
            })
          }
        });
   //   this.genEditSvce.checkIfNoticeNeeded('vacMan');                                   // see if a notice of a change is needed
    });
console.log("213");
  }
selectCoverer(n, i ){
    this.showSendEmailToCoverers = true;
    if (this.covererToggle ){
      this.covererName = n;
      this.covererUserKey = i;
      this.covererName2='';
      this.writeLog("covererUserKey set to ", this.covererUserKey);
    }
    else {
      this.covererName2 = n;  
      this.covererUserKey2 = i;    
      this.writeLog("covererUserKey2 set to ", this.covererUserKey2);
    }
    this.covererToggle = !this.covererToggle;
 
  }
  goHome(u){
    window.location.href = 'https://ion.mgh.harvard.edu/cgi-bin/main.pl?userid=' + u;
  }
  writeLog(s, arg){
    this.genEditSvce.writeLog(s  + "   "  + this.covererUserKey).subscribe(
      (res) => {
        console.log("res from  writeLog is  %o", res);
      }
    );
  }
  setColorForCoverage(s){
    if ( s && s == 1)
      return 'covered';
    else
      return 'notCovered';  
  }
  storeCovererData()
  {                    // store the nominated coverer UserKey 
    this.showSendEmailToCoverers = false;
    this.rData['emailByKey']['116'] = "flonberg@partners.org";              // since I am not in dataBase need to add adHoc
  //  if (this.covererUserKey )
  //    var mTA_prod = [this.rData['emailByKey'][this.covererUserKey]];
    var link1 = this.genEditSvce.urlBase +`/acceptCov.php?covererAUserkey=` 
          + this.covererUserKey + '&mode=acceptCov&vidx=' + this.items._data[this._id].vidx;
    if (this.covererUserKey2){
      var link2 =this.genEditSvce.urlBase +`/acceptCov.php?covererAUserkey=` 
      + this.covererUserKey2 + '&mode=acceptCovB&vidx=' + this.items._data[this._id].vidx;
    }   
    this.writeLog(" in storeCovererData ", link1);
        /*************  Send Coverage Emails        */
    var message = `<html> <head><title> Vacation Coverage Acknowledgment </title></head>
      <p> ` + this.loggedInFirstName + `  ` + this.loggedInLastName + ` would like you to cover her/his time away. 
      starting  ` + 
                  this.datePipe.transform(this.items._data[this._id].start) + `
      through  ` + this.datePipe.transform(this.items._data[this._id].end) + ` </p>
      <p> THIS IS A TEST IN SOFTWARE DEVELOPEMENT, APPOLOGIES FOR THE BOTHER, PLEASE IGNORE. </p>
      <p><a href=`+ link1 + `>  ` + this.covererName + ` accepts coverage. </a></p>
    `;
    if (this.covererUserKey2 > 0 ){                                         // if the IS a second coverer
      message +=  `<p> <a href=`+ link2 + `> Accept  ` + this.covererName2 + `  coverage. </a></p>`;
    }
    var prodAddr = [this.rData['emailByKey'][this.covererUserKey]];         // the PROD adderess array
      if ( this.covererUserKey2  )                                            // if there IS a second coverer
        prodAddr.push(this.rData['emailByKey'][this.covererUserKey2])         // add her address. 
    var mTA = {
      "Dev": ["flonberg@partners.org"],
      "Prod": prodAddr,
     }  
    var emp = {
      action: "sendEmail2",
      addr: { "Dev":["flonberg@partners.org"],
              "Prod":prodAddr
      },
      msg: message,
      subject: "coverage", 
      debug: 1
    }
    this.writeLog("storeCovererData", link1);
    this.genEditSvce.genPOST(emp).subscribe(
      (res) => {
        console.log("res from sendEmail2 from storeCovererDate is  %o", res);
      }
    );
   /***********  Update the dataBase for the coverers   */
    const upDateParams = <dB_POSTparams>{
      action:'editAndLog',
      tableName:'vacation3',
      whereColName:['vidx'],
      whereColVal:[this.items._data[this._id].vidx],
      editColNames: ['coverageA', 'coverageB'],
      editColVals: [  this.covererUserKey.toString(), this.covererUserKey2.toString()   ],
      userid: this.userid,   
    };  
    this.genEditSvce.genPOST(upDateParams).subscribe(
      (res) => {
        console.log("res updateCoveresx" + res);
      }
    );
  }                                                       // end of StoreCovererData 

  enterInDbAndEmail(){
    console.log("enterinDb %o", this.covererDates);
    this.showCoverers = true;
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
      userid: this.userid,
      action: 'editAndLog',
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
  clicked(ev) 
  {// this responds to ANY click-RELEASE in the div containing the calendar

      if (document.getElementById('datums') && document.getElementById('datums').innerText.length > 0) 
       { // user click on a tA
    
           this._id = +document.getElementById('datums').innerText;     // _id of the item clickedOn in the DataSet
           this.createEditForm();                                   // THIS LOADS THE VALUES FROM DATASET INTO WIDGETS
           console.log("407 clicked %o", ev);
       /////////  this.data2 is a DataSet Object which has the _data property to contain my data \\\\\\\\\\
           if (!this.items._data[this._id]) {                                                        // click was NOT in a tA box;
            return;
          }
   
     //    console.log("approved " + this.data2._data[this._id]['approved'])
       if (this.items){
        this._vidx = this.items._data[this._id].vidx;                                           // store the vidx for editing
        document.getElementById('vidx').innerText = this.items._data[this._id].vidx; // store the vidx for DELETE
       }
        //   this.seP.whereColVal = this.data2._data[this._id].vidx;                                 // seP =>  this.insertP used for editing tA
           if (this._id >= 0 ) {                                                                // shows user had clicked a box
             this.showControls = true;                                                          // show editing controls
             this.drawEditControls = true;
             if (this.items && this.items._data[this._id].approved == 1 )
              this.helpArray = ['Click on the Coverage drop-down and select person',
                                ' who will be you First Coverer.',  
                                'If you want to nominate a Second Coverer,',
                                ' click on the Coverage drop-down again',  
     
                              ];
             }     
             else
              this.helpArray = ['Your Time Away must be approved before you cen select coverers'];                           
           }
           console.log('clicked'  + this._id);
      /*******  classify loggedInUser as tA Owner or coverer */     
       if (this.items && this.items._data[this._id] &&  this.items._data[this._id].className === this.userid) { // loggedInUser is tA owner 
           this._readonly = false;                                                              // enable editing
           } else
          {                                                                             // user is NOT tA owner
              this._readonly = true;                                                                // make controls readOnly
              this.helpArray = [ "Click on a TimeAway to see the details for tha TimeAway.",
                                "Coverer name in green means that the coverage has bee accepted."]; 
           }
           
       if (this.userid === 'napolitano' ) {                                                     // official 'approver'
           this.isApprover = true;
         }
      console.log("466");   
      /***********  Set Class for Coverers display,  according to Acceptance */   
      if (this.items && this.items._data[this._id]     )  { 
        if ( this.items._data[this._id]['covA_Duty'] == '1')
          this.coverageAclass = "Accepted";
          else
            this.coverageAclass = "NotAccepted";
        if ( this.items._data[this._id]['covB_Duty'] == '1')
            this.coverageBclass = "Accepted";
            else
                this.coverageBclass = "NotAccepted";     
        /***********  Set if loggedInUser it the Coverer  */
        if  (this.items._data[this._id]['coverageA'] ==   this.rData['loggedInUserKey']){
          this.coverageA_isLoggedInUser = true;
        }
        if  (this.items._data[this._id]['coverageB'] ==   this.rData['loggedInUserKey']){
          this.coverageB_isLoggedInUser = true;
        }
        /************   Change Help text */
        console.log("rData has " + +this.rData['loggedInUserKey'] + " items hsa " + +this.items._data[this._id]['userkey'])
        if (+this.rData['loggedInUserKey'] == +this.items._data[this._id]['userkey']){
          this.helpArray = [
            'Click on the Coverage drop-down and select person who will be you First Coverer.',  
            'If you want to nominate a Second Coverer, click on the Coverage drop-down again.',  
          ]
        }
    }

    console.log("coverageAclass" + this.coverageAclass);   
         var dParams = {              // create a set of this.insertP to b used by genDB_POST to delete the tA
          'tableName': 'vacation3', 'whereColName': 'vidx', 'whereColVal': document.getElementById('vidx').innerText,
          'editColNames':[],
          'editColVals':[],
          'action': 'editAndLog'                                     
        };
        this.dB_PP.whereColName=['vidx'];
        this.dB_PP.whereColVal = [document.getElementById('vidx').innerText]

       if (document.getElementById('datums2').innerText.indexOf('remove') !== -1) {             // presence of the work 'remove' indicates user clicked 'x'
    
       this.items.remove({id: +document.getElementById('datums').innerText});                // remove the item from the dataSet
           this.drawEditControls = false;                                                       // turn off the edit Controls.
           document.getElementById('datums2').innerText = "";                                   // clear it so that further clicks on tA don't result in delete
           dParams.editColNames = ['reasonIdx'];
           dParams.editColVals = ['99'];
           this.genEditSvce.genDB_POST(dParams);                                              // use REST call to delete tA from the dataBase.
       } 
         else if ( this.items &&  this.items._data[this._id] ){             // Ed/
 
            var startDateEdit = this.datePipe.transform(this.items._data[this._id].start, 'yyyy-MM-dd');
            var endDateEdit = this.datePipe.transform(this.items._data[this._id].end, 'yyyy-MM-dd');
         //   this.formatDateYYYymmdd(this.items._data[this._id].start);    // format the date for use in dataBase
          //  var endDateEdit = this.formatDateYYYymmdd(this.items._data[this._id].end);        //    "
          //  dParams.editColNames = ['startDate','endDate'];
            this.dB_PP.editColNames = ['startDate','endDate'];      
            this.dB_PP.editColVals = [startDateEdit ,endDateEdit ];
            this.dB_PP.action = 'editAndLog';

           // dParams.editColVals = [startDateEdit,endDateEdit];

           // this.genEditSvce.genDB_POST(this.dB_PP);               // use REST call to update the dataBase.
         }
         
         this.rDataKey = +this.find_rDataKey()
         console.log("527 rDataKey " + this.rDataKey)
    }       /*******  end of clicked */
  /*********  find the key of the selected timeAway element in the rData so can find Coverers */
  find_rDataKey(){
    for( var prop in this.rData.data ) {
          if( this.rData.data[prop][ 'vidx' ] === this._vidx )
              return prop;
      }
  }  
     /*********  This is used by the New TimeAway  ***********/
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
    console.log('529 this.items %o', this.items._data);
    this.reasonSelect = this.items._data[this._id].reason.toString(); // set selected
    this.doValidation = false;
    this.invalidFromDate = false;

    var toDateRaw = this.items._data[this._id].start
    toDateRaw = toDateRaw.substring(0, toDateRaw.length - 10);;
    var fromDateRaw = this.items._data[this._id].end;
    fromDateRaw = fromDateRaw.substring(0, fromDateRaw.length - 10);
    this.shownNote = this.items._data[this._id].note;
    this.formEdit = this.fb.group({                          // fb ison
      goAwayerBox: [ this.items._data[this._id].content],
      dateToEdit: [toDateRaw, Validators.required ],
      dateFromEdit: [fromDateRaw, Validators.required ],
      reasonGEdit: [''],
      noteGEdit: [ this.items._data[this._id].note]
    }, {validator: this.dateLessThan('dateFromEdit', 'dateToEdit', 'reasonGEdit')}
    );;
    console.log("561")
  //  this.makeDateLabels();
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
        advEndDate.setDate(advEndDate.getDate() + 1); 
        const advStartDateString = this.datePipe.transform(advStartDate, 'yyyy-MM-dd'); 
        const advEndDateString = this.datePipe.transform(advEndDate, 'yyyy-MM-dd'); 
        console.log("589  advStartDateString " + advStartDateString)
        this.insertP = <SinsertParams>{};                                // create instance of interface
        this.insertP.tableName = 'vacation3';
        this.insertP.action = 'insertRecGen';
        this.insertP.colName  = ['startDate', 'endDate' , 'reason', 'note', 'userid', 'approved'];  // names of columns to INSERT
        this.insertP.colVal = [advStartDateString,  // colValues 
          advEndDateString, this.formG.value.reasonG,
          this.formG.value.noteG, this.rData['loggedInUserKey'], '0'];
        const link =this.genEditSvce.urlBase +`/approveTA.php?goAwayerUserKey` + this.rData['loggedInUserKey'];       // Need to get the vidx just added/
        console.log("544  insertP is %o", this.insertP);
      
            /***********  enter newTA in dataBase  */
    this.genEditSvce.genPOST(this.insertP)
      .subscribe(                                          
        (response) => {
          this.retFromPost(response);                         // loads params of justInserted tA and sends email to Brian
          window.location.reload();
        })   


   // this.newTimeAway2 = false;    
  }
 /**********  Use the param returned from Insert POSt to add newTA to DataSet  */
  retFromPost(s){
    this.ret = s;                             // stores the vacation3 vidx to a
    var idx = s.lastID;
    this.lastInsertIdx = s['lastID'];
    console.log("idx is %o" +  s );

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
    return idx;
  }


  setQueryParams(qP) {
    if (qP.userid) {
      this.userid = qP.userid;
      console.log(" 655  dddd %o", this.userid);
      this.genEditSvce.setUserId(qP.userid);                                            // pass the userid to gen-edit for use in REST svces
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
  // tslint:disable-next-line:use-life-cycle-interface
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
//    var startDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);    // move to first day of current month for showing
    var startDateShown = new Date();    // move to first day of current month for showing
    var endDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);      // move endDateShown foward 8 weeks from startDateShown
    endDateShown.setDate(startDate.getDate() + numWeeks * 8);   
  //  this.genEditSvce.getTAs().subscribe(
    var url = 'REST_GET.php?action=getTAs&userid=' + this.userid;
    this.items = null;
    this.groups2 = null;
    this.items = new vis.DataSet();                                     // for tAs
    this.groups2 = new vis.DataSet();                                   // for Groups;
    this.groups2Array = new Array();                                             // Array to keep track of if added to groups2
  
    if (this.param)
      url += this.param;
    this.genEditSvce.genGet(url).subscribe(
      (val) => {
        if (this.index === 0) {    
          this.rData = val;
          console.log("737  rData %o", this.rData);
          this.rData.data = this.myBubsort(this.rData.data);              // alphabetize by LastName
   //       this.data2 = new vis.DataSet(this.rData['data']);
         } else {
     //     this.data2 = Array();
        }
        for (let key in this.rData.users) {
          let value = this.rData.users[key];
          console.log("key is " + key + " data has %o", this.rData.fromION[key].LastName)
          if (+key > 0)
          this.foptions.push( this.rData.fromION[key].LastName )
             }
        
        var setId = 1;                                                    
        var tAstartDate = new Date();
        var tAendDate = new Date();
 //    var tst = this.rData.fromION.find(t=>t.userid == this.userid);
        /*****           process data and add to TimeLine DataSet             */
        var styleTxt= 'background-color:rgb(195,195,195);';
        for (var key in this.rData)
        {
          for (var key2 in this.rData[key]){
            if (this.rData[key][key2]['start'])
              var startDateArg = this.rData[key][key2]['start'].substring(0,this.rData[key][key2]['start'].length -9 )+ "T04:11:00Z" 
            if (this.rData[key][key2]['end'] && this.rData[key][key2]['type'] !== 'background') // advance end to avoid 'humping'
              var endDateArg = this.rData[key][key2]['end'].substring(0,this.rData[key][key2]['end'].length -9 ) + "T00:00:00Z" ;
            if (this.rData[key][key2]['end'] && this.rData[key][key2]['type'] == 'background') // don't advance backgrong end 
              var endDateArg = this.rData[key][key2]['end'].substring(0,this.rData[key][key2]['end'].length -9 ) + "T04:00:00Z" ;  
            tAstartDate = new Date(startDateArg );
            tAendDate = new Date(endDateArg);
          //  if ( tAstartDate > startDateShown )
            {
             if ( this.rData[key][key2]['content']){
                if (   +this.rData[key][key2]['userkey'] > 0  ){                                    // adjuct color to reflect approval
                  if (+this.rData[key][key2]['rank']== 0  && +this.rData[key][key2]['userkey'] !== 58 ){
                    if (+this.rData[key][key2]['approved'] == 0 )
                      styleTxt = 'background-color:white;'
                    else   
                      styleTxt= 'background-color:rgb(195,195,195);';
                  }
                  var group2Badded = this.groups2Array.indexOf(this.rData[key][key2]['content'] ) ;
                  if (group2Badded == -1 ){                                                       // if groups does not yet exist
                    this.groups2Array.push(this.rData[key][key2]['content']);
                    this.groups2.add({id: this.groups2Array.indexOf(this.rData[key][key2]['content']) , content: this.rData[key][key2]['content']})
                    this.rData[key][key2]['type']= 'range';
                    group2Badded = this.groups2Array.indexOf(this.rData[key][key2]['content'] ) ;
                  }
                  else {                                                                            // weekend
                    this.rData[key][key2]['type']= 'background';                                    // add 'type' for shading
                  }
                }
                if (   +this.rData[key][key2]['userkey'] > 0  ){                                    // normal nonWeekend tA
                  const tAO = { id: ++setId, content: this.rData[key][key2]['content'], start: startDateArg,
                                        style:styleTxt,
                                        end: endDateArg, group:  group2Badded, vidx:this.rData[key][key2]['vidx'],
                                        reason: this.rData[key][key2]['reason'], note: this.rData[key][key2]['note'],
                                        className: this.rData[key][key2]['className']}  
               //   console.log("774 tAO %o", tAO);                      
                  this.items.getDataSet().add(tAO);
                }   
                else {
                  const tAO = { id: ++setId,  start: startDateArg,
                    className:this.rData[key][key2]['className'],
                    end: endDateArg,  type:'background',
                    }  
                  this.items.getDataSet().add(tAO);
                }           
              }
            }
          }      
        }
     //   console.log('787  items %o', this.items)

      //  if (this.timeline)
    //      this.timeline.destroy;
        this.timeline = new vis.Timeline(this.tlContainer, this.items, {});
        this.timeline.setOptions(this.options);
        this.timeline.setGroups(this.groups2);
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
      selectable: true,

      onAdd: function (item, callback) {
        document.getElementById('datums').innerHTML = item.group;
        document.getElementById('datums2').innerHTML = item.start;
      },
      onRemove: function (item, callback) {
        document.getElementById('datums').innerHTML = item.id;
        document.getElementById('datums2').innerHTML = callback;
      },
      groupOrder: function (a, b) {
        return a.value - b.value;
      },
      start: startDateShown,
      end: endDateShown,
    };
  }                                                   // end of getTimeLineData
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
  removeBads(){
    for (let key in this.items._data){
      if (this.items._data[key].start > this.items._data[key].end){
        delete this.items._data[key];
      }
    }
  }
  
      /*************  remove the tA from display working, needs dataBase part **************/
  remove() {
    this.items.remove(this._id);                                         // remove LOCALLY
    this.showControls = false;                                          // turn off controls             
    this.dB_PP.editColNames = ['reasonIdx'];                            // the col which holds the DELETE sign
    this.dB_PP.editColVals = ['99'];                                    // the DELETE code
    this.dB_PP.whereColName = ['vidx'];
    this.dB_PP.whereColVal = [document.getElementById('vidx').innerText]  // the DOM element link to the timeline
    this.genEditSvce.genDB_POST(this.dB_PP);                            // do the dB operation
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
  EDO = { "OldStartDate": String,                                 // used for email 
                  "NewStartDate": String,
                  "OldEndDate": String,
                  "NewEndDate": String,
                }
  storeEdit(type,e){
    this.editColNames[0] = 'approved';
    this.showSubmitChanges = true;
    this.editColVals[0] = '0';
    if (e.value){
      this.editColNames.push(type);
 
      this.editColVals.push(e.value);  
    }
    else  if (e.target){
        this.editColNames.push(type);
        this.editColVals.push(e.target.value);
        const dateForDataSet = e.target.value + "T00:00:00Z"; 
        if (type=='startDate'){
          this.needStartEmail = true;
          this.EDO.OldStartDate = this.items._data[this._id]['start'].slice(0,10); ; 
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
        var str = "approved";  
   
        // use of Constructor Property 


    }
  }
  saveEdits(){
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
    console.log("905  saveEdits ep %o", eP);
    if (this.needStartEmail)
      this.sendStartOrEndDateEmail();
    this.genEditSvce.genPOST(eP).subscribe(
      (res) => {
        console.log("res from updatel %o",  res);
      }
    );
    this.drawEditControls = false;
  }
  sendStartOrEndDateEmail(){
    var link33 = this.genEditSvce.urlBase +`/approveTA.php?vidx=` + this.items._data[this._id].vidx;
    if (this.needStartEmail){
      var msg = "<p>The  Time Away of " + this.items._data[this._id]['content'] + ' has changed';
      if (typeof this.EDO.NewStartDate === 'string'){
        msg += " from Start Date of " + this.EDO.OldStartDate + " to " + this.EDO.NewStartDate +',';
      }
      if (typeof this.EDO.NewEndDate === 'string'){
        msg += " from End Date of " + this.EDO.OldEndDate + " to " + this.EDO.NewEndDate +',';
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
      console.log("Brian Email msg is " + msg);  
    }
  }
tSP(param){

}
toggleShowPhysicists(param){
  this.getTimelineData2(0);

}
editGen(type: string, event: any) {                                  // editGen is used for ALL fields
 console.log("editGen");
    var dateForDataSet = ''; 
   const shownId = this._id;
   var messageUsed = ""; 
  // console.log( 'editGen ' + this.items._data[this._id]['approved'] + "thisis" + shownId);
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
  storeDate(type: string, event: MatDatepickerInputEvent<Date>) {
    var loc = event;
    console.log("1090 tAstartDate",type, this.formG.value.dateFrom);
    console.log("1090 tAendDate",type, this.formG.value.dateTo);
    if ( this.formG.value.dateTo && this.formG.value.dateFrom > this.formG.value.dateTo)
      this.endBeforeStart = true;  
    if ( this.formG.value.dateTo && this.formG.value.dateFrom <= this.formG.value.dateTo)
      this.endBeforeStart = false;  
  }
  getReason()
  {
    console.log("1074  gotReason");
    this.gotReason = true;
    if ( this.formG.value.dateTo &&  this.formG.value.dateFrom && this.formG.value.dateFrom <= this.formG.value.dateTo )
      this.formValidation = true; 
  }


  
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
  setNewTimeAway2(){
    this.newTimeAway2 = true;
    this.helpArray = [
      'Start Date, End Date and Reason must be entered before',
       'new Time Away can be Submitted.  '
    ];
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
        this.nameToUserId[i] = { lastName: s._data[i].content, userid: s._data[i].userkey };  // make dS of lastName paired with  userkey
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
