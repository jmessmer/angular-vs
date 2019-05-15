import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { BasicVirtualScrollComponent } from './basic-virtual-scroll/basic-virtual-scroll.component';
import { AgGridScrollComponent } from './ag-grid-scroll/ag-grid-scroll.component';


const routes: Routes = [
  { path: 'basic', component: BasicScrollComponent },
  { path: 'basicvs', component: BasicVirtualScrollComponent },
  { path: 'aggrid', component: AgGridScrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }