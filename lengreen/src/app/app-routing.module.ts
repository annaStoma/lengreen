import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateClientsPageComponent } from './pages/private-clients-page/private-clients-page.component';
import { CorporativeClientsPageComponent } from './pages/corporative-clients-page/corporative-clients-page.component';
import { FurnitureForKitchenComponent } from './components/furniture-for-kitchen/furniture-for-kitchen.component';
import { FullInfoComponent } from './components/full-info/full-info.component';
import { FurnitureForLivingRoomComponent } from './components/furniture-for-living-room/furniture-for-living-room.component';
import { ImageDialogComponent } from './components/shared/image-dialog/image-dialog.component';
import { CalculateClosetFormComponent } from './calculate-closet-form/calculate-closet-form.component';
import { CalculateKitchenFormComponent } from './calculate-kitchen-form/calculate-kitchen-form.component';
import { CalculateProjectFormComponent } from './calculate-project-form/calculate-project-form.component';


const routes: Routes = [
  {path:'', redirectTo: 'private', pathMatch: 'full'},
  {path:'private', component: PrivateClientsPageComponent },
  {path:'private/kitchen-cost', component: CalculateKitchenFormComponent }, 
  {path:'private/closet-cost', component: CalculateClosetFormComponent }, 
  {path:'private/project-cost', component: CalculateProjectFormComponent }, 
  {path:'corporative', component: CorporativeClientsPageComponent },
  {path:'private/kitchen', component: FurnitureForKitchenComponent },
  {path:'private/kitchen/:id', component: FullInfoComponent }, 
  {path:'private/living-room', component: FurnitureForLivingRoomComponent },
  {path:'private/living-room/:id', component: ImageDialogComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
