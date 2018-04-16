import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';

import { CoreModule } from 'core-eagle/modules/esm2015/core-eagle.js';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule, // TODO: move this to reports module!!!
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: AppComponent },
      { path: 'core', component: ReportsComponent }
    ])
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
