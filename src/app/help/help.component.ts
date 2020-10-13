import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  showHelpBool: boolean 
  @Input() helpArray : string[];
  constructor(   private activatedRoute: ActivatedRoute, ) { }

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
  goHome(){
    this.activatedRoute                                             // point to the route clicked on
    .queryParams                                                    // look at the queryParams
    .subscribe                                                      // get the queryParams as Observable
    (queryParams => 
      {                                    
        window.location.href = 'https://ion.mgh.harvard.edu/cgi-bin/main.pl?userid=' + queryParams.userid;
      }
    )
  }
}
