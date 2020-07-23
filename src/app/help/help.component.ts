import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  @Input() helpArray : string[];
  constructor() { }

  ngOnInit() {
  }
  showHelp(){
    console.log('showHelp');
    document.getElementById('helpDiv').style.display="block";
    document.getElementById('hideHelp').style.display="none";
  }
  hideHelp(){
    console.log('showHelp');
    document.getElementById('helpDiv').style.display="none";
    document.getElementById('hideHelp').style.display="block";
  }

}
