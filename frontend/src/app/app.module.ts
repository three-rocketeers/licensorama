import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AdminTableRowComponent } from './admin-table-row/admin-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTableComponent,
    AdminTableRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
