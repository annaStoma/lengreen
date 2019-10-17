import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateClientsPageComponent } from './pages/private-clients-page/private-clients-page.component';
import { CorporativeClientsPageComponent } from './pages/corporative-clients-page/corporative-clients-page.component';
import { FurnitureForKitchenComponent } from './components/furniture-for-kitchen/furniture-for-kitchen.component';
import { FullInfoComponent } from './components/full-info/full-info.component';


const routes: Routes = [
  {path:'', redirectTo: 'private', pathMatch: 'full'},
  {path:'private', component: PrivateClientsPageComponent },
  {path:'corporative', component: CorporativeClientsPageComponent },
  {path:'private/kitchen', component: FurnitureForKitchenComponent },
  {path:'private/kitchen/:id', component: FullInfoComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
