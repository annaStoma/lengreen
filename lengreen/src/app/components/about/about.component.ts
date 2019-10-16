import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // api: string = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab3e0119600c270afc3a691565b7d70111a99dc3cee50b0a5e05d41d4aa0476ca&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true';
 // api: string = 'https://yandex.ru/maps/?um=constructor%3Ab3e0119600c270afc3a691565b7d70111a99dc3cee50b0a5e05d41d4aa0476ca&source=constructorLink';


  constructor( private http: HttpClient) { }

  ngOnInit() {
    //this.getMap();
  }

  // get(){
  //   const httpOptions = {
  //   headers: new HttpHeaders({ 
  //     'Content-Type': 'application/json'
  //   })
  // };
  //   //  const params = new HttpParams()
  //   // .set('Access-Control-Allow-Origin', '*');

  //   const headers = new HttpHeaders().append('Access-Control-Allow-Origin', '*'); 
  //   // return this.http.get(this.api);
  //   return this.http.get(this.api, {headers: headers});
  // }

  // getMap(){
  //   this.get()
  //   .subscribe((data: any) =>  {
  //     console.log(data);
  //   });
  // }
}
