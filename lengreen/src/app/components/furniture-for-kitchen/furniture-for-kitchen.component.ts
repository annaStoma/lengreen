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
      url: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'
    },
    {
      id: '02',
      name: "Sarah",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 107,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
    },
    {
      id: '03',
      name: "Milan",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 675,
      url: 'https://thumbs.dreamstime.com/z/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8-104312198.jpg'
    },
    {
      id: '04',
      name: "Boston",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 167,
      url: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'
    },
    {
      id: '05',
      name: "Sarah",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 107,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
    },
    {
      id: '06',
      name: "Milan",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 675,
      url: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2018%2F12%2FHD-163296.jpg'
    },
    {
      id: '07',
      name: "Boston",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 167,
      url: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'
    },
    {
      id: '08',
      name: "Sarah",
      style: "Современный",
      material: "ДСП Egger",
      facades: "Суперматовый Fenix NTM",
      prise: 107,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
    },
  ]

}
