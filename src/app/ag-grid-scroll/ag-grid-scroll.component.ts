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
    private products;

  constructor() {
    let self = this;
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
        {
            headerName: "Name",
            field: "name",
            width: 200
        },
        {
            headerName: "Description",
            field: "description",
            width: 100
        },
        {
            headerName: "Price",
            field: "price",
            width: 100
        },
        {
            headerName: "Weight",
            field: "weight",
            width: 100
        },
        {
            headerName: "Quatity",
            field: "quantity",
            width: 100
        }
    ];
    //Hide the overlay
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
    this.products = Array(200)
    .fill(1)
    .map(_ => {
      return {
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          price: faker.commerce.price(1, 100),
          weight: faker.random.number({ min: 1, max: 10, precision: 0.01 }),
          quantity: faker.random.number({ min: 0, max: 5 }),
      };
    });
    this.gridOptions.rowData = this.products.sort(function sortByLastName(products1, products2) {
      let name1 = products1.name.split(" ")[0].toUpperCase();
      let name2 = products2.name.split(" ")[0].toUpperCase();
        if (name1 < name2) {
          return -1;
        }
        if (name1 > name2) {
          return 1;
        }
        return 0;
    });
   }

  ngOnInit() {
  }

}