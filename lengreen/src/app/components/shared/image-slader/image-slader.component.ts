import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slader',
  templateUrl: './image-slader.component.html',
  styleUrls: ['./image-slader.component.scss']
})
export class ImageSladerComponent {

@Input() public images: Array<string> = [];

}
