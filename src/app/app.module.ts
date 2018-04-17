import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReportsModule } from './main/reports/reports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: AppComponent }
    ])
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
