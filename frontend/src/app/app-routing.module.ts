import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminTableComponent} from './admin-table/admin-table.component'
import {CatalogCardComponent} from "./catalog-card/catalog-card.component";
import {CatalogListComponent} from "./catalog-list/catalog-list.component";

const routes: Routes = [
  {path: 'admin-control-panel', component: AdminTableComponent},
  {path: 'catalog', component: CatalogListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
