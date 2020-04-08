import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrivateClientsPageComponent } from './pages/private-clients-page/private-clients-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CorporativeClientsPageComponent } from './pages/corporative-clients-page/corporative-clients-page.component';
import { ChangeViewNavComponent } from './components/change-view-nav/change-view-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageSladerComponentModule } from './components/shared/image-slader/image-slider.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OfferComponent } from './components/offer/offer.component';
import { FurnitureComponent } from './components/furniture/furniture.component';
import { NavigationCorporativeComponent } from './components/navigation-corporative/navigation-corporative.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ProductionComponent } from './components/production/production.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/shared/card/card.component';
import { FurnitureForKitchenComponent } from './components/furniture-for-kitchen/furniture-for-kitchen.component';
import { FurnitureForLivingRoomComponent } from './components/furniture-for-living-room/furniture-for-living-room.component';
import { FullInfoComponent } from './components/full-info/full-info.component';
import { CalculateTheCostButtonComponent } from './components/shared/calculate-the-cost-button/calculate-the-cost-button.component';
import { NavigationPrivatePageComponent } from './components/navigation-private-page/navigation-private-page.component';
import { ImageCardComponent } from './components/shared/image-card/image-card.component';
import { ImageDialogComponent } from './components/shared/image-dialog/image-dialog.component';
import { CalculateKitchenFormComponent } from './components/calculate-kitchen-form/calculate-kitchen-form.component';
import { CalculateClosetFormComponent } from './components/calculate-closet-form/calculate-closet-form.component';
import { CalculateProjectFormComponent } from './components/calculate-project-form/calculate-project-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PrivateClientsPageComponent,
    CorporativeClientsPageComponent,
    ChangeViewNavComponent,
    FooterComponent,
    OfferComponent,
    FurnitureComponent,
    NavigationCorporativeComponent,
    WhyChooseUsComponent,
    ProductionComponent,
    PartnersComponent,
    AboutComponent,
    CardComponent,
    FurnitureForKitchenComponent,
    FurnitureForLivingRoomComponent,
    FullInfoComponent,
    CalculateTheCostButtonComponent,
    NavigationPrivatePageComponent,
    ImageCardComponent,
    ImageDialogComponent,
    CalculateKitchenFormComponent,
    CalculateClosetFormComponent,
    CalculateProjectFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImageSladerComponentModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
