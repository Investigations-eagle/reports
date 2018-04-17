import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReportsListComponent } from '../reports-list/reports-list.component';
import { ReportsDetailsComponent } from '../report-details/reports-details.component';
import { ReportsComponent } from './reports.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportsComponent
      },
      {
        path: 'reports-list',
        component: ReportsListComponent
      },
      {
        path: 'report-details',
        component: ReportsDetailsComponent
      }
    ])
  ],
  declarations: [
    ReportsComponent,
    ReportsListComponent,
    ReportsDetailsComponent
  ],
  exports: [ReportsComponent, ReportsListComponent, ReportsDetailsComponent],
  entryComponents: [ReportsComponent]
})
export class ReportsModule { }
