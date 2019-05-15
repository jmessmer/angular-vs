import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { BasicVirtualScrollComponent } from './basic-virtual-scroll/basic-virtual-scroll.component';


const routes: Routes = [
  { path: 'basic', component: BasicScrollComponent },
  { path: 'basicvs', component: BasicVirtualScrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }