import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import * as faker from 'faker';
import * as _ from "lodash";

@Component({
  selector: 'app-ag-grid-scroll',
  templateUrl: './ag-grid-scroll.component.html',
  styleUrls: ['./ag-grid-scroll.component.scss']
})
export class AgGridScrollComponent implements OnInit {
    private gridOptions: GridOptions;
    private workers;

  constructor() {
    let self = this;
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
        {
            headerName: "Worker",
            field: "name",
            width: 354
        }
    ];
    let hideOverlay = _.debounce(function hide() {
      self.gridOptions.api.hideOverlay();
    }, 100);
    this.gridOptions.onBodyScroll = function scroll(event) {
      let rowIndex = Math.floor((event.top / 46))+ (self.gridOptions.api.paginationGetCurrentPage()*100);
      let first2Letters = self.gridOptions.rowData[rowIndex].name.substring(0,2);
      self.gridOptions.overlayNoRowsTemplate =  '<span style="padding: 10px; border: 1px solid #444; background: LightGray; opacity: 0.5;">' + first2Letters + '</span>';
      self.gridOptions.api.showNoRowsOverlay();
      setTimeout(hideOverlay, 100);
    };    

    this.gridOptions.pagination = true;
    this.workers = Array(200)
    .fill(1)
    .map(_ => {
      return {
        name: faker.name.lastName() + ", " + faker.name.firstName()
      };
    });
    this.gridOptions.rowData = this.workers.sort(function sortByLastName(person1, person2) {
      let lastName1 = person1.name.split(',')[0].toUpperCase();
      let lastName2 = person2.name.split(',')[0].toUpperCase();
        if (lastName1 < lastName2) {
          return -1;
        }
        if (lastName1 > lastName2) {
          return 1;
        }
        return 0;
    });
   }

  ngOnInit() {
  }

}