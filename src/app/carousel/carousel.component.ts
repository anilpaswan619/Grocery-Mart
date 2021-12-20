import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images:any = []

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("./assets/banner.json").subscribe((res:any) => {this.images=res})

  }

}
