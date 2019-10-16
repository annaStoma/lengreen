import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporative-clients-page',
  templateUrl: './corporative-clients-page.component.html',
  styleUrls: ['./corporative-clients-page.component.scss']
})
export class CorporativeClientsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public images: Array<string> = [
    '/assets/images/page-2/slider1.jpg',
    '/assets/images/page-2/slider2.jpg',
    '/assets/images/page-2/slider3.jpg',
  ];

}
