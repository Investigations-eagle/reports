import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportDetailsComponent } from './report-details/report-details.component';


@NgModule({
  declarations: [
    ReportsComponent,
    ReportsListComponent,
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forRoot(
    //   [
    //     { path: 'reports-list', component: ReportsListComponent },
    //     { path: 'report-details', component: ReportDetailsComponent}
    //   ]
    // )
  ],
  bootstrap: [ReportsComponent],
  providers: [],
  exports: [ReportsComponent]
})
export class ReportsModule { }
