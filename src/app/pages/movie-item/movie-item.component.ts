import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/entity/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:Movie=new Movie();

  constructor() { }

  ngOnInit(): void {
  }

  getRate(rate:number){
   
    rate= Math.ceil(rate/2);
    if(rate==0)
       rate=1;
   return Array(rate).fill(0).map((x,i)=>i);
  }

}
