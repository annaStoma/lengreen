import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-private-clients-page',
  templateUrl: './private-clients-page.component.html',
  styleUrls: ['./private-clients-page.component.scss']
})
export class PrivateClientsPageComponent {

  public images: Array<string> = [
    '/assets/images/slider1.jpg',
    '/assets/images/slider2.jpg',  ];
}
