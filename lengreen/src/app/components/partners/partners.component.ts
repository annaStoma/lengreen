import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor() { }
  public images: Array<string> = [
    '/assets/images/page-2/slider1.jpg',
    '/assets/images/page-2/slider2.jpg',
    '/assets/images/page-2/slider3.jpg',
  ];
  ngOnInit() {
  }

}
