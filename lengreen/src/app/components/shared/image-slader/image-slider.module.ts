import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImageSladerComponent } from './image-slader.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [ImageSladerComponent],
  exports: [ImageSladerComponent],
  bootstrap: [ImageSladerComponent]
})
export class ImageSladerComponentModule {}
