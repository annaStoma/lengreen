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


// platformBrowserDynamic()
//     .bootstrapModule(ImageSladerComponentModule)
//     .then(ref => {
//       // Ensure Angular destroys itself on hot reloads.
//       if (window['ngRef']) {
//         window['ngRef'].destroy();
//       }
//       window['ngRef'] = ref;

//       // Otherwise, log the boot error
//     })
//     .catch(err => console.error(err));


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImageSladerComponentModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
