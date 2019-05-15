import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialsModule } from './materials.module';
import { AgGridModule } from "ag-grid-angular/main";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { BasicVirtualScrollComponent } from './basic-virtual-scroll/basic-virtual-scroll.component';
import { AgGridScrollComponent } from './ag-grid-scroll/ag-grid-scroll.component'

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
    AgGridModule
  ],
  declarations: [
    AppComponent,
    MainNavComponent,
    BasicScrollComponent,
    BasicVirtualScrollComponent,
    AgGridScrollComponent
  ],
  providers: [
    CommerceProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }