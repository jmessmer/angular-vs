import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  scrollers;

  constructor() { 
    this.scrollers = [
      {
        name: 'Basic Scrolling',
        description: 'Basic Scrolling',
        routerLink: '/basic'
      },
      {
        name: 'Basic Virtual Scrolling',
        description: 'Basic Virtual Scrolling',
        routerLink: '/basicvs'
      },
      {
        name: 'agGrid',
        description: 'Grid Virtual Scrolling',
        routerLink: '/aggrid'
      }
    ];
  }

  ngOnInit() {
  }

}