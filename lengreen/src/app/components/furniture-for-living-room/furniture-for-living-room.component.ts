import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture-for-living-room',
  templateUrl: './furniture-for-living-room.component.html',
  styleUrls: ['./furniture-for-living-room.component.scss']
})
export class FurnitureForLivingRoomComponent implements OnInit {

  public images: Array<Object> = [
    {
      id: 1,
      url: 'https://svisloch.by/wp-content/uploads/2019/10/prime-gostinaya.jpg'
    },
    {
      id: 2,
      url: 'https://svisloch.by/wp-content/uploads/2019/10/palermo-gostinya.jpg'
    },
    {
      id: 3,
      url: 'https://svisloch.by/wp-content/uploads/2019/10/imperia.jpg'
    },
    {
      id: 4,
      url: 'https://svisloch.by/wp-content/uploads/2019/10/geneve-gostinya.jpg'
    },
    {
      id: 5,
      url: 'https://svisloch.by/wp-content/uploads/2019/10/bavaria-gostinya.jpg'
    },
    {
      id: 6,
      url: 'https://svisloch.by/wp-content/uploads/2019/03/tiffany.jpg'
    },
    {
      id: 7,
      url: 'https://svisloch.by/wp-content/uploads/2019/01/eleganca-min.jpg'
    },
    {
      id: 5,
      url: 'https://svisloch.by/wp-content/uploads/2018/10/floriana_gostin.jpg'
    },
    {
      id: 6,
      url: 'https://svisloch.by/wp-content/uploads/2018/10/vitrina_gostinaya__1095h674.jpg'
    },
    {
      id: 7,
      url: 'https://svisloch.by/wp-content/uploads/2018/07/main.jpg'
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
