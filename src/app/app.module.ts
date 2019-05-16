import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialsModule } from './materials.module';
import { AgGridModule } from "ag-grid-angular/main";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { BasicPaginationScrollComponent } from './basic-pagination-scroll/basic-pagination-scroll.component';
import { BasicInfiniteScrollComponent } from './basic-infinite-scroll/basic-infinite-scroll.component';
import { BasicVirtualScrollComponent } from './basic-virtual-scroll/basic-virtual-scroll.component';
import { AgGridScrollComponent } from './ag-grid-scroll/ag-grid-scroll.component'

import { ProductCardComponent } from './product-card/product-card.component';

import * as Hammer from 'hammerjs';

import { CommerceProductService } from './service/commerce-product.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    ScrollingModule,
    AgGridModule,
    InfiniteScrollModule
  ],
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    BasicScrollComponent,
    BasicPaginationScrollComponent,
    BasicInfiniteScrollComponent,
    BasicVirtualScrollComponent,
    AgGridScrollComponent,
    ProductCardComponent
  ],
  providers: [
    CommerceProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }