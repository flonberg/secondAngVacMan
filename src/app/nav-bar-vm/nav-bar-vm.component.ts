import { ActivatedRoute, ParamMap } from '@angular/router';
import { TimeLineComponent } from './../time-line/time-line.component';
import { Component, OnInit } from '@angular/core';
import { GenEditService } from '../gen-edit.service';

@Component({
  selector: 'app-nav-bar-vm',
  templateUrl: './nav-bar-vm.component.html',
  styleUrls: ['./nav-bar-vm.component.css']
})
export class NavBarVMComponent implements OnInit {
  routeLinks: any[];
  userid: string;
  index: number;
  button:string;
  buttonSel: string;
  loggedInLastname: string;
  napParam: any;
  constructor(private tlc: TimeLineComponent, private actRout: ActivatedRoute, private genEditSvce: GenEditService, ) { 
  
   // this.userid = tlc.userid;
    this.button= "button ";
    this.buttonSel = "buttonSel";
    this.index = 0;
    this.routeLinks = [
      {
          label: 'Vacation Manager',
          link: './VacMan',
          index: 0,
      },
       {
          label: 'Monthview',
          link: './MonthView',
          index: 1,   
      },
      {
        label: 'ProtonMonthview',
        link: './ProtonMonth',   
        index: 2,   
    },
       {
        label: 'My Duties',
        link: './MyDuties',
        index: 3,   
    }, 
    {
      label: 'Week View',
      link: './WeekView',
      index: 4,   
    }
    ];
    console.log(" 55 navBar %o", this.loggedInLastname );
   if (this.userid =='Napolitano')
    {
      this.routeLinks.push({
        label: 'Dosimetrist Assignments',
        link: './DosimAssign',
        index: 5
      })
    }
  }
  ngOnInit(){
    this.napParam =  { 'userid': 'napolitano'}
    this.actRout.queryParams.subscribe(params => {
      this.userid = params['userid'];

    });
    if (!this.userid)
      this.userid = <string>this.genEditSvce.userid;
      console.log( " 63   ggggg " + this.userid);
  }
  setUserLastname(val)
  {
    this.loggedInLastname = val;
    console.log("nav has %o", this.loggedInLastname);
  }
  setIndex(n){
    this.index = n;
  }


}
