import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateClientsPageComponent } from './pages/private-clients-page/private-clients-page.component';
import { CorporativeClientsPageComponent } from './pages/corporative-clients-page/corporative-clients-page.component';


const routes: Routes = [
  {path:'', component: PrivateClientsPageComponent },
  {path:'private', component: PrivateClientsPageComponent },
  {path:'corporative', component: CorporativeClientsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
