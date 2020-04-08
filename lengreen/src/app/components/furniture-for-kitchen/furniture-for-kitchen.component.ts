import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-for-kitchen',
  templateUrl: './furniture-for-kitchen.component.html',
  styleUrls: ['./furniture-for-kitchen.component.scss']
})
export class FurnitureForKitchenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToItemInfo(id: string) {
    this.router.navigate(['/private/kitchen', id]);
  }

  items: any = [
    {
      id: '01',
      name: "Boston",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 167,
      url: 'https://bellacasa.by/images/com_hikashop/upload/thumbnails/600x800fsO/112.jpg'
    },
    {
      id: '02',
      name: "Sarah",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 107,
      url: 'https://bellacasa.by/images/com_hikashop/upload/thumbnails/600x800fsO/01_406181173.jpg'
    },
    {
      id: '03',
      name: "Milan",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 675,
      url: 'https://bellacasa.by/images/com_hikashop/upload/thumbnails/600x800fsO/image48.jpg'
    },
    {
      id: '04',
      name: "Boston",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 167,
      url: 'https://bellacasa.by/images/com_hikashop/upload/thumbnails/600x800fsO/image39_690850922.jpg'
    },
    {
      id: '05',
      name: "Sarah",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 107,
      url: 'https://bellacasa.by/images/com_hikashop/upload/thumbnails/600x800fsO/image47.jpg'
    },
    {
      id: '06',
      name: "Milan",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 675,
      url: 'https://bellacasa.by/images/com_hikashop/upload/thumbnails/600x800fsO/41a.jpg'
    },
    {
      id: '07',
      name: "Boston",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 167,
      url: 'https://bellacasa.by/images/com_hikashop/upload/thumbnails/600x800fsO/1_20190722_1540793106.jpg'
    },
    {
      id: '08',
      name: "Sarah",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 107,
      url: 'https://bellacasa.by/images/com_hikashop/upload/thumbnails/600x800fsO/001-.jpg'
    },
  ]

}
