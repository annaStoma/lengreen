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
    'https://bellacasa.by/images/resized/images/joomlart/slideshow_homepage/2ljhk_1500_800.jpg',
    'https://bellacasa.by/images/resized/images/joomlart/slideshow_homepage/1ret_1500_800.jpg',
  ];

}
