import { Component, OnInit, Input } from '@angular/core';
import { GenEditService, SinsertParams, dB_GETparams, dB_POSTparams } from './../gen-edit.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  @Input() visible: boolean;
  @Input() userid: string;
  @Input() masterArray : string[];
  @Input() noticeColName: string;
  phraseA: string[];
  constructor(private genEditSvce: GenEditService) {
    this.phraseA = new Array();

   }

  ngOnInit() {
    console.log('init' + this.masterArray + "colName " + this.noticeColName)
  }
  closeModal(){
    document.getElementById('noticeModalComponent').style.display = "none"; 
  }
  cancelNotice(){                                                   // 
    console.log('cancel Notice');
    const gP = <dB_POSTparams>{
      action:'editAndLog',
      tableName: 'notice',
      whereColName: ['UserId'],
      whereColVal: [this.userid],
      editColNames: [this.noticeColName],
      editColVals: ['1'],
      insert: true
    }
    this.genEditSvce.genDB_POST(gP);
    this.closeModal();
  }
  @Input()
  set name(name: string) {
    this.userid = (name && name.trim()) ;
  }
  
}
