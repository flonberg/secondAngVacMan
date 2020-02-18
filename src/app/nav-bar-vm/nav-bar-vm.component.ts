import { TimeLineComponent } from './../time-line/time-line.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-vm',
  templateUrl: './nav-bar-vm.component.html',
  styleUrls: ['./nav-bar-vm.component.css']
})
export class NavBarVMComponent implements OnInit {
  routeLinks: any[];
  userid: String;
  constructor(private tlc: TimeLineComponent) { 
    this.userid = tlc.userid;
    this.routeLinks = [
      {
          label: 'Vacation Manager',
          link: './VacMan',
          index: 0
      }, {
          label: 'Month View',
          link: './Monthview',
          index: 1
      }
  ];
  }

  ngOnInit() {
  }

}
