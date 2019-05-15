import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import * as faker from 'faker';

@Component({
  selector: 'app-ag-grid-scroll',
  templateUrl: './ag-grid-scroll.component.html',
  styleUrls: ['./ag-grid-scroll.component.scss']
})
export class AgGridScrollComponent implements OnInit {
    private gridOptions: GridOptions;
    private workers;

  constructor() {
    this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "Worker",
                field: "name",
                width: 200
            }
        ];
      this.gridOptions.pagination = true;
      this.workers = Array(200)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.lastName() + ", " + faker.name.firstName()
        };
      });
      this.gridOptions.rowData = this.workers;
   }

  ngOnInit() {
  }

}