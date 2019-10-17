import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateClientsPageComponent } from './pages/private-clients-page/private-clients-page.component';
import { CorporativeClientsPageComponent } from './pages/corporative-clients-page/corporative-clients-page.component';
import { FurnitureForKitchenComponent } from './furniture-for-kitchen/furniture-for-kitchen.component';
import { FullInfoComponent } from './full-info/full-info.component';


const routes: Routes = [
  {path:'', component: PrivateClientsPageComponent },
  {path:'private', component: PrivateClientsPageComponent },
  {path:'corporative', component: CorporativeClientsPageComponent },
  {path:'kitchen', component: FurnitureForKitchenComponent },
  {path:'kitchen/:id', component: FullInfoComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
