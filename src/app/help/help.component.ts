import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  showHelpBool: boolean 
  @Input() helpArray : string[];
  constructor() { }

  ngOnInit() {
    this.showHelpBool = false; 
  }
  showHelp(){
    this.showHelpBool = true;
    document.getElementById('helpDiv').style.display="block";
    document.getElementById('hideHelp').style.display="none";
  }
  hideHelp(){
    this.showHelpBool = false;
    document.getElementById('helpDiv').style.display="none";
    document.getElementById('hideHelp').style.display="block";
  }

}
