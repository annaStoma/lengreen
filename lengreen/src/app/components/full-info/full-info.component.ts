import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-info',
  templateUrl: './full-info.component.html',
  styleUrls: ['./full-info.component.scss']
})
export class FullInfoComponent implements OnInit {

  @Input() id: string;
  public item: any;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getInfo(this.id);
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
  getInfo(id) {
    // const films = JSON.parse(localStorage.getItem('films'));
    this.items.forEach(item => {
      if (item.id == id) {
         this.item = item;
      }
    });
  }


}
