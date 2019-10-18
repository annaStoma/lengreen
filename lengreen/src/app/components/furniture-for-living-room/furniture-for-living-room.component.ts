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
      url: 'https://images.unsplash.com/photo-1500087830410-e1f671bed149?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1966&q=80'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1414322058660-a4c56ab6c1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1473244228373-94e7e7fd250f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1491958501121-458097ef59ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1455688257455-cd10853c57c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1473773386757-42bbe7288351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1491958501121-458097ef59ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1455688257455-cd10853c57c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1473773386757-42bbe7288351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
