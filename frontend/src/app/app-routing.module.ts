import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTableComponent } from './admin-table/admin-table.component'

const routes: Routes = [
  { path: 'admin-control-panel', component: AdminTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}