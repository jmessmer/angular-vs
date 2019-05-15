import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicVirtualScrollComponent } from './basic-virtual-scroll/basic-virtual-scroll.component'

const routes: Routes = [
  { path: 'basic', component: BasicVirtualScrollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }