import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { BasicPaginationScrollComponent } from './basic-pagination-scroll/basic-pagination-scroll.component';
import { BasicInfiniteScrollComponent } from './basic-infinite-scroll/basic-infinite-scroll.component';
import { BasicVirtualScrollComponent } from './basic-virtual-scroll/basic-virtual-scroll.component';
import { AgGridScrollComponent } from './ag-grid-scroll/ag-grid-scroll.component';
import { AdvancedScrollComponent} from './advanced-scroll/advanced-scroll.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard',  pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic', component: BasicScrollComponent },
  { path: 'basic-pagination', component: BasicPaginationScrollComponent },
  { path: 'basic-infinite', component: BasicInfiniteScrollComponent },
  { path: 'basicvs', component: BasicVirtualScrollComponent },
  { path: 'aggrid', component: AgGridScrollComponent },
  { path: 'advancedscroll', component: AdvancedScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
