import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapLoaderService {
  // map$: Subject<any>;

  // constructor() {
  //   this.map$ = new Subject<any>();
  // }

  // getMap(element: string, coords: number[]): Observable<any> {
  //   const scriptYmaps = document.createElement('script');
  //   scriptYmaps.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  //   document.body.appendChild(scriptYmaps);
  //   const createMap = () => {
  //     const map = new ymaps.Map(
  //       element,
  //       {
  //         center: coords,
  //         zoom: 9
  //       }
  //     )
  //   }
  //   scriptYmaps.onload = function () {
  //     ymaps.ready(createMap);
  //   }

  //   return this.map$;
  // }
}