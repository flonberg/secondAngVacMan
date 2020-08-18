import { TimeLineComponent } from './../time-line/time-line.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-vm',
  templateUrl: './nav-bar-vm.component.html',
  styleUrls: ['./nav-bar-vm.component.css']
})
export class NavBarVMComponent {
  routeLinks: any[];
  userid: String;
  index: number;
  button:string;
  buttonSel: string;
  constructor(private tlc: TimeLineComponent) { 
    this.userid = tlc.userid;
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
  }
  setIndex(n){
    this.index = n;
  }


}
