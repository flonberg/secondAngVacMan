import { editParam } from './../dose-fx/dose-fx.component';
import { GenEditService, SinsertParams, dB_GETparams, dB_SimpleGETparams, emailParams } from './../gen-edit.service';
import { SeditParams, dB_POSTparams } from './../gen-edit.service';
import { AfterViewInit, Component, OnInit, ElementRef, ViewChild, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { throwMatDialogContentAlreadyAttachedError, matDatepickerAnimations } from '@angular/material';

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
  
  showCoverers = false;
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
  masterArray = ['This new page is part of upgrade of Whiteboard.',
  'To see details, or edit a TimeAway, click on that TimeAway. ',
  'If you have difficulties or questions concerning the page, please email to flonberg@partners.org.'
                ];
  helpArray = ['To schedule a Time Away click on the New Time Away button ',
                'The Help shown here will change to be relevant to you stage in the scheduling of your Time Away.'  ];
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

  constructor( private http: HttpClient, private genEditSvce: GenEditService, private router: Router,
    private activatedRoute: ActivatedRoute, private datePipe: DatePipe, private fb: FormBuilder) {  
      this.ret = 1;
    this.dateLabels = [];
    this.nomCoverers = [];
    this.redraw = true;
    this.showControls = false;                            // *ngIf condition for the controls section
    this._readonly = true;
    this.isApprover = false;
    this.nameToUserId = [ {lastName: '', userid: ''} ];
    this.useridToUserkeys = [{ userid: 'Unknown', userkey: 0 }];
    this.contentArray = [];
    this.newTimeAwayBool = false;                               // enable editing of existing tAs
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
  
  ngOnInit() {
    console.log(" this.router.url is   "   + this.router.url   + "server is " +  window.location.href);
    this.activatedRoute                                             // point to the route clicked on
    .queryParams                                                    // look at the queryParams
    .subscribe(queryParams => {                                     // get the queryParams as Observable
      this.qP = queryParams;
      this.setQueryParams(queryParams);
   //   this.seP.who = this.userid;
      this.getTimelineData2();                                      // get the data from REST database call.
      this.genEditSvce.checkIfNoticeNeeded('vacMan');                                   // see if a notice of a change is needed
    });
console.log("213");
  }

  selectCoverer(n, i ){
    if (this.covererToggle ){
      this.covererName = n;
      this.covererUserKey = i;
      this.covererName2='';
    }
    else {
      this.covererName2 = n;  
      this.covererUserKey2 = i;    
    }
    this.covererToggle = !this.covererToggle;
 
  }
  acceptCoverage(e){
    console.log("cover %o", e);
    if (e == 'covA_Duty')
      this.coverageAclass = "Accepted";
    if (e == 'covB_Duty')
      this.coverageBclass = "Accepted";
    const upDateParams = <dB_POSTparams>{
      action:'editAndLog',
      tableName:'vacation3',
      whereColName:['vidx'],
      whereColVal:[this.data2._data[this._id].vidx],
      editColNames: [e],
      editColVals: [ "1"  ],
      userid: this.userid
    };
    console.log("371");
  this.genEditSvce.genDB_POST(upDateParams);
  }
  setColorForCoverage(s){
    if ( s && s == 1)
      return 'covered';
    else
      return 'notCovered';  
  }
  storeCovererDate()
  {                    // store the nominated coverer UserKey 
    console.log(" rData %o", this.rData['data'][this._id]['vidx']);
    const vidx = this.rData['data'][this._id]['vidx'];              // the vidx to be edited. 
    this.rData['emailByKey']['116'] = "flonberg@partners.org";

      var mailKey1 = this.covererUserKey;
      var mailKey2= this.covererUserKey2;

    var mTA_dev = ["flonberg@partners.org"];
    var mTA_prod = [this.rData['emailByKey'][mailKey1]];
    var link1 = this.genEditSvce.urlBase +`/acceptCov.php?covererAUserkey=` 
          + this.covererUserKey + '&mode=acceptCov&vidx=' + this.data2._data[this._id].vidx;
    if (mailKey2){
      var link2 =this.genEditSvce.urlBase +`/acceptCov.php?covererAUserkey=` 
      + this.covererUserKey2 + '&mode=acceptCovB&vidx=' + this.data2._data[this._id].vidx;
      mTA_dev.push("flonberg@gmail.com")        // CHANGE TO ACTUAL COVERERADDRESS WHEN GOING TO PRODUCTION 
      mTA_prod.push(this.rData['emailByKey'][mailKey2])
    }     
    console.log("link is " + link1 + "mTA_prod is %o ", mTA_prod);
    var message = `<html> <head><title> Vacation Coverage Acknowledgment </title></head>
    <p> ` + this.loggedInFirstName + `  ` + this.loggedInLastName + ` would like you to cover her time away. 
     starting  ` + this.formatDateYYYymmdd(this.data2._data[this._id].start) + `
     through  ` + this.formatDateYYYymmdd(this.data2._data[this._id].end) + ` </p>
    <p> THIS IS A TEST IN SOFTWARE DEVELOPEMENT, APPOLOGIES FOR THE BOTHER, PLEASE IGNORE. </p>
    <p><a href=`+ link1 + `> Accept  ` + this.covererName + ` coverage. </a></p>
    `;
    if (this.covererUserKey2 > 0 ){
      message +=  `<p> <a href=`+ link2 + `> Accept  ` + this.covererName2 + `  coverage. </a></p>`;
    }
    const upDateParams = <dB_POSTparams>{
      action:'editAndLog',
      tableName:'vacation3',
      whereColName:['vidx'],
      whereColVal:[this.data2._data[this._id].vidx],
      editColNames: ['coverageA', 'coverageB'],
      editColVals: [  this.covererUserKey.toString(), this.covererUserKey2.toString()   ],
      userid: this.userid,   
      email:{
        mailToAddresses: mTA_dev,
        msg : message,
        subject: "TEST EMAIL PLEASE DISREGARD "
      }
    };
    const emailParams = <emailParams> {
      action:'sendEmailWithMessage', 
      subject: 'Time Away Coverage',
      msg : `<html> <head><title> Vacation Coverage Acknowledgment </title></head>
      <p> ` + this.loggedInFirstName + `  ` + this.loggedInLastName + ` would like you to cover her time away. 
       starting  ` + this.formatDateYYYymmdd(this.data2._data[this._id].start) + `
       through  ` + this.formatDateYYYymmdd(this.data2._data[this._id].end) + ` </p>
      <p> THIS IS A TEST IN SOFTWARE DEVELOPEMENT, APPOLOGIES FOR THE BOTHER, PLEASE IGNORE. </p>
      <p><a href=`+ link1 + `> Accept  coverage. </a></p>
      `,
      addresses: ['flonberg@partners.org']          // for prod send the coverer address. 
    }
    console.log("371fff");
    this.genEditSvce.genPOST(upDateParams).subscribe(
      (res) => {
        console.log("res from sendEmailWithMessage " + res);
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
       if (document.getElementById('datums') && document.getElementById('datums').innerText.length > 0) { // user click on a tA
           this._id = +document.getElementById('datums').innerText;     // _id of the item clickedOn in the DataSet
           this.createEditForm();                                   // THIS LOADS THE VALUES FROM DATASET INTO WIDGETS
       /////////  this.data2 is a DataSet Object which has the _data property to contain my data \\\\\\\\\\
           if (!this.data2._data[this._id]) {                                                        // click was NOT in a tA box;
            return;
          }
       //   console.log("approved " + this.data2._data[this._id]['approved'])
        this._vidx = this.data2._data[this._id].vidx;                                           // store the vidx for editing
        document.getElementById('vidx').innerText = this.data2._data[this._id].vidx; // store the vidx for DELETE
     //   this.seP.whereColVal = this.data2._data[this._id].vidx;                                 // seP =>  this.insertP used for editing tA
           if (this._id >= 0 ) {                                                                // shows user had clicked a box
             this.showControls = true;                                                          // show editing controls
             this.drawEditControls = true;
             if (this.data2._data[this._id].approved == 1)
              this.helpArray = ['Click on the Coverage drop-down and select person who will be you First Coverer.',  
                                'If you want to nominate a Second Coverer, click on the Coverage drop-down again',       
                              ];
             }     
             else
              this.helpArray = ['Your Time Away must be approved before you cen select coverers'];                           
           }
           console.log('clicked'  + this._id);
      /*******  classify loggedInUser as tA Owner or coverer */     
       if ( this.data2._data[this._id] &&  this.data2._data[this._id].className === this.userid) { // loggedInUser is tA owner 
           this._readonly = false;                                                              // enable editing
           } else
          {                                                                             // user is NOT tA owner
              this._readonly = true;                                                                // make controls readOnly
              this.helpArray = [ "Click on a TimeAway to see the details for tha TimeAway.",
                                "Coverer namd in green means that the coverage has bee accepted."]; 
           }
           
       if (this.userid === 'napolitano' ) {                                                     // official 'approver'
           this.isApprover = true;
         }
      /***********  Set Class for Coverers display,  according to Acceptance */   
      if ( this.data2._data[this._id]     )  { 
        if ( this.data2._data[this._id]['covA_Duty'] == '1')
          this.coverageAclass = "Accepted";
          else
            this.coverageAclass = "NotAccepted";
        if ( this.data2._data[this._id]['covB_Duty'] == '1')
            this.coverageBclass = "Accepted";
            else
                this.coverageBclass = "NotAccepted";     
        /***********  Set if loggedInUser it the Coverer  */
        if  (this.data2._data[this._id]['coverageA'] ==   this.rData['loggedInUserKey']){
          this.coverageA_isLoggedInUser = true;
        }
        if  (this.data2._data[this._id]['coverageB'] ==   this.rData['loggedInUserKey']){
          this.coverageB_isLoggedInUser = true;
        }
        /************   Change Help text */
        console.log("rData has " + +this.rData['loggedInUserKey'] + " data2 hsa " + +this.data2._data[this._id]['userkey'])
        if (+this.rData['loggedInUserKey'] == +this.data2._data[this._id]['userkey']){
          this.helpArray = [
            "To change any parameter relevant to this TimeAway, just make the change in the Start Date, End Date, Reason, or Note.",
            "The change is updated in the DataBase as soon as you make the change on the screen.",
            "The is no need to click on a Submit button. "
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
    
       this.data2.remove({id: +document.getElementById('datums').innerText});                // remove the item from the dataSet
           this.drawEditControls = false;                                                       // turn off the edit Controls.
           document.getElementById('datums2').innerText = "";                                   // clear it so that further clicks on tA don't result in delete
           dParams.editColNames = ['reasonIdx'];
           dParams.editColVals = ['99'];
           this.genEditSvce.genDB_POST(dParams);                                              // use REST call to delete tA from the dataBase.
       } 
         else if (   this.data2._data[this._id] ){             // Ed/
 
            var startDateEdit = this.formatDateYYYymmdd(this.data2._data[this._id].start);    // format the date for use in dataBase
            var endDateEdit = this.formatDateYYYymmdd(this.data2._data[this._id].end);        //    "
          //  dParams.editColNames = ['startDate','endDate'];
            this.dB_PP.editColNames = ['startDate','endDate'];      
            this.dB_PP.editColVals = [startDateEdit ,endDateEdit ];
            this.dB_PP.action = 'editAndLog';

           // dParams.editColVals = [startDateEdit,endDateEdit];

           // this.genEditSvce.genDB_POST(this.dB_PP);               // use REST call to update the dataBase.
         }
         
    }       /*******  end of clicked */
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
    console.log('147');
    this.reasonSelect = this.data2._data[this._id].reason.toString(); // set selected
    this.doValidation = false;
    this.invalidFromDate = false;
    var toDate = new Date(this.data2._data[this._id].start).toISOString().slice(0,10);           // format date yyyy/mm/dd
    var fromDate = new Date(this.data2._data[this._id].end).toISOString().slice(0,10);
    this.formEdit = this.fb.group({                          // fb ison
      goAwayerBox: [ this.data2._data[this._id].content],
      dateToEdit: [toDate, Validators.required ],
      dateFromEdit: [fromDate, Validators.required ],
      reasonGEdit: [''],
      noteGEdit: [ this.data2._data[this._id].note]
    }, {validator: this.dateLessThan('dateFromEdit', 'dateToEdit', 'reasonGEdit')}
    );
    this.makeDateLabels();
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
      var dateString = this.datePipe.transform(sDate,"yyyy-dd-dd");
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
  onSubmit() 
  {
        /*********     Add to dataBase  **********************/
        if (+this.loggedInRank < 5 )
        this.helpArray = ['Your Time Away needs to be approved before you can select coverage. '];
        this.insertP = <SinsertParams>{};                                // create instance of interface
        this.insertP.tableName = 'vacation3';
        this.insertP.action = 'insertRecGen';
        this.insertP.colName  = ['startDate', 'endDate' , 'reason', 'note', 'userid', 'approved'];  // names of columns to INSERT
        this.insertP.colVal = [this.formG.value.dateFrom,  // colValues 
          this.formG.value.dateTo, this.formG.value.reasonG,
          this.formG.value.noteG, this.userkey], '0';
        const link =this.genEditSvce.urlBase +`/approveTA.php?goAwayerUserKey` + this.rData['loggedInUserKey'];       // Need to get the vidx just added/
        console.log("544  insertP is %o", this.insertP);
        this.insertP.email = {
              msg : `<html> <head><title> Vacation Coverage Acknowledgment </title></head>
              <p> ` + this.loggedInFirstName + `  ` + this.loggedInLastName + ` has scheduled a Time Awau. </p>
              <p> You can approve this Time Away using the below link: </p>
              <a href=`+ link + `> Time away schedule. </a>`,
              mailToAddresses : Array("flonberg@partners.org","flonberg@gmail.com"),
              subject: "Time Away"
          };
   
   this.genEditSvce.genPOST(this.insertP)
   .subscribe(                                          // can't subscribe to POST REST calls ?????
    (response) => {
      this.retFromPost(response);
    })   
    this.newTimeAway2 = false;    
 
  }
 /**********  Use the param returned from Insert POSt to add newTA to DataSet  */
  retFromPost(s){
    this.ret = s;
    console.log("store %o",  s);                               // stores the vacation3 vidx to a
    var idx = s.lastID;
    this.lastInsertIdx = s['lastID'];
    console.log("idx is" +  s['lastID'] );

    const item = {
      id: Object.keys(this.data2._data).length + 1,                 // incase the user has DELETED a tA before adding
      start: this.formG.value.dateFrom + ' 00:00:00',
      end: this.formG.value.dateTo + ' 00:00:00',
      content: this.contentArray[this.userkey],                    // build the dataStruct to add to the timeLine DataSet,
      group: this.groupsArray.indexOf(this.contentArray[this.userkey]),
      reason: this.formG.value.reasonG,
      note: this.formG.value.noteG,
      className: this.userid,
      vidx: this.lastInsertIdx
    };
    var idOfAdded = this.timeline.itemsData.getDataSet().add(item);  // add the new tA to local DataSe
    console.log("593 %o", item);
       /*************  Parameters for NeedToApprove Email  */
       if (this.rData.loggedInUserRank < 5){                   // if loggedInUser is Dosim.
        const mP = {
          'action': 'sendEmail2',
          'addr':['flonberg@partners.org'],              // change to Brian
          'msg': `<html> <head><title> Vacation Coverage Acknowledgment </title></head>
          <p> ` + this.loggedInFirstName + `  ` + this.loggedInLastName + ` has scheduled a Time Away from ` 
          + this.formG.value.dateFrom     +  `    to + ` + this.formG.value.dateTo     +  `. </p>
          <p> You can approve this Time Away using the below link: </p>
          <a href=`+ this.genEditSvce.urlBase +`/approveTA.php?vidx=` + this.lastInsertIdx + `> Approve Time Away </a>`,
          } ;
        this.genEditSvce.genPOST(mP)
        .subscribe(
            (response)=>{
              console.log("emailService");
            }
          ); 
        }
    return idx;
  }
  /*
  get startDateGet(){ return this.form.get('startDate');}
  get endDateGet(){return this.form.get('endDate');}
  */
  /************    specific update routine to update StartDate and EndDate of tA, when user drags a tA  ************/
  updateDB_StartEnd(sD: string, eD: string) {
      const upDateParams = <dB_POSTparams>{
        action:'editAndLog',
        tableName:'vacation3',
        whereColName:['vidx'],
        whereColVal:[this.data2._data[this._id].vidx],
        editColNames: ['startDate', 'endDate'],
        editColVals: [  this.formatDateYYYymmdd(sD) , this.formatDateYYYymmdd(eD)  ],
        userid: this.userid
      };
      console.log("371");
   this.genEditSvce.genDB_POST(upDateParams);
  }

  formatDateYYYymmdd(d) {
    const pi = 3.14;
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
  
  getTimelineData2() 
  {
    /***********   set the startDate and endDates for collecting enuff data for everyone to be in the dataStructure    ***************/
    const numWeeks = 8;                                                                 // number of weeks to show on the calendar
    const todayDate = new Date();
    const startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);         // move to first day of current month
    const endDate = new Date();  
                                                      // create new date to use for end                            
    endDate.setMonth(startDate.getMonth() + 4);                                         // set a date to be the forward date of data collection
    startDate.setMonth(startDate.getMonth() - 12);                                       // set date for backward data collection far enough back to get all users
    this.startDateString = this.datePipe.transform(startDate, 'yyyy-MM-dd');            // format it for dataBase startDate for getting tAs
    this.endDateString = this.datePipe.transform(endDate, 'yyyy-MM-dd');                // mm for endDate
    /****************   set the dates for showing on the calendar as the first of current month and forward 8 weeks  ******************/
    var startDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);    // move to first day of current month for showing
    var endDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);      // move endDateShown foward 8 weeks from startDateShown
    endDateShown.setDate(startDate.getDate() + numWeeks * 7);   
   //   this.genEditSvce.getTAs(this.startDateString,this.endDateString).subscribe(
      this.genEditSvce.getTAs().subscribe(
      (val) => {
        console.log("627  val " + val);
        if (this.index === 0) {    
          this.rData = val;
          this.data2 = new vis.DataSet(this.rData['data']);
         } else {
          this.data2 = Array();
        }
        console.log("rData: %o", this.rData);
        if (this.qP['vidx']){
          Object.keys(this.rData['data']).forEach(key => {
            if (this.rData['data'][key].vidx === Number(this.qP['vidx'])) {
              this.keyFromQP = Number(key);
                console.log("Found.");
            }
        });
        }
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
      selectable: true,
      onAdd: function (item, callback) {
        document.getElementById('datums').innerHTML = item.group;
        document.getElementById('datums2').innerHTML = item.start;
      },
      onRemove: function (item, callback) {
        document.getElementById('datums').innerHTML = item.id;
        document.getElementById('datums2').innerHTML = callback;
      },
      start: startDateShown,
      end: endDateShown,
    };
   
    
      
  

  }  
  setLoggedInUserKey(){

  }  
  setCoverageAcceptances(){

  }                                                       // end of getTimelineData2
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
    if (this.useridToUserkeys[index]) {                              // Someone may use page who is NOT a goAwayer. 
      this.userkey = this.useridToUserkeys[index].userkey;  
      this.loggedInLastName = s._data[index].LastName;
      this.loggedInFirstName = s._data[index].FirstName;
      }                 // the userKey of the loggedIn user
  }
  assignGroups() {                                                     // put each tA in proper group.
    for (const property in this.data2._data ) {
      if (this.data2._data.hasOwnProperty(property)) {                // 'hasOwnProperty' is typescript to see it a p is in arry
        this.data2._data[property].group = this.nameList.indexOf(this.data2._data[property].content);  // set the correct groupNumber
    //  if (this.data2._data[property].approved === 1) {
      //    this.data2._data[property].style = 'color:green';
      //  }
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
  sendEmail(type, event){
    console.log("sendEmail %o", event);
  }
  editGen(type: string, event: any) {                                  // editGen is used for ALL fields
   var dateForDataSet = ''; 
   const shownId = this._id;
   console.log( 'editGen ' + this.data2._data[this._id]['approved'] + "thisis" + shownId);
    if (type =='start' || type =='end'){                                  // if it is a date
      const changedDate = this.formatDateForTimeline(event.value);                 // make the string for local update
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
    if (type === 'start' || type === 'end' && +this.data2._data[this._id]['approved'] == 1 ) {
      console.log("561 wwwwwwww");
      const link =this.genEditSvce.urlBase +`/dist/material-demo/index.html?userid=napolitano`;
      this.dB_PP.email.msg = `<html> <head><title> Vacation Coverage Acknowledgment </title></head>
      <p>A Time Away for ` + this.formatDateYYYymmdd(this.data2._data[this._id].start) + `  ` + this.loggedInLastName + ` has changed. </p>
      <p> You can approve this time away using the below link: </p>
      <a href=`+ link + `> Time away schedule. </a>`
      this.dB_PP.email.mailToAddresses[0] = "flonberg@partners.org";
     // this.dB_PP.email.mailToAddresses[1] = "flonberg@gmail.com";
      this.dB_PP.email.subject='Time Away';
    }  
    var link33 = this.genEditSvce.urlBase +`/approveTA.php?vidx=` + this.data2._data[this._id].vidx;
    var emp = {msg : "",
                action:"sendEmail2",
               addr: ["flonberg@partners.org"] };
    if (type === 'start') {
      emp.msg = "The start date of the Time Away for " + this.data2._data[this._id]['LastName'] + " has changed  from " + this.data2._data[this._id]['start'].substr(0, 10) +
      " to " + event.target.value +". You can approve this change by clicking on <p><a href=" + link33 + "> Approve Change </a></p>";
      this.data2.update({id: this._id, start: dateForDataSet});           // do the local update
      this.data2.update({id: this._id, style:'color:red' })
      this.startDateEdited = true;
      this.dB_PP.editColNames = ['startDate','approved'];
      this.dB_PP.editColVals.push('0');
    //  this.dB_PP.needEmail="dateChange";
      this.genEditSvce.sendEmail(emp).subscribe(
        (res) => {
          console.log("res from sendEmail " + res);
        }
      );
    
    }                                                                   // update startDate
    if (type === 'end') {
      emp.msg = "The end date of the Time Away for " + this.data2._data[this._id]['lastName'] + " has changed  from " + this.data2._data[this._id]['end'].substr(0, 10) +
        "to " + event.target.value  +". You can approve this change by clicking on <p><a href + " + link33 + "> Approve Change </a> </p>";
      console.log("oldVal " + emp.msg);
     this.data2.update({id: this._id, end: dateForDataSet}); 
     this.data2.update({id: this._id, style:'color:red' })
      this.endDateEdited = true;
      this.dB_PP.editColNames = ['endDate','approved'];
      this.dB_PP.editColVals.push('0');
      this.dB_PP.needEmail="dateChange";
     // this.genEditSvce.sendEmail(emp).subscribe;
      this.genEditSvce.sendEmail(emp).subscribe(
        (res) => {
          console.log("res from sendEmail " + res);
        }
      );
    }
    if (type == 'note'){
      this.dB_PP.editColNames = ['note'];
      this.dB_PP.editColVals = [ event.target.value];
    }
    if (type == 'del'){
      this.drawEditControls = false;
    //  this.seP.editColName = 'reasonIdx';
      this.dB_PP.editColNames = ['reasonIdx'];
      this.dB_PP.editColVals = [ '99'];
      this.data2.remove({id: this._id })
    }
    if (type == 'approve'){
      this.dB_PP.editColNames = ['approved'];
      this.dB_PP.editColVals = [ '1'];
      this.data2.update({id: this._id, style:'color:blue' })
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

/*
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
      'Start Date, End Date and Reason must be entered before new Time Aways can be Submitted.  '
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
