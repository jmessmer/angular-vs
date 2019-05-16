import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-paginator',
  templateUrl: './basic-paginator.component.html',
  styleUrls: ['./basic-paginator.component.scss']
})
export class BasicPaginatorComponent implements OnInit {
  @Input() disablePrevious: boolean;
  @Input() disableNext: boolean;
  @Input() getPrevious: Function;
  @Input() getNext: Function;

  @Input() offset: number;
  @Input() limit: number;
  @Input() total: number;

  constructor() { }

  ngOnInit() {
  }

}