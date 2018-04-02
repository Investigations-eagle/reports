import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsComponent } from './reports.component';


@NgModule({
  declarations: [
    ReportsComponent,
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [ReportsComponent],
  providers: [],
  exports: [ReportsComponent]
})
export class ReportsModule { }
