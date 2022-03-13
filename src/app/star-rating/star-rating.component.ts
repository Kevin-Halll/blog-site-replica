import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  stars:number[]=[1,2,3,4,5];
  selectedValue:number = 0;
  isMouseOver = true;

  countStar(star:number){
    this.isMouseOver = false;
     this.selectedValue = star;
  }

  addClass(star:number){
    if(this.isMouseOver){
      this.selectedValue = star;
    }
  }

  removeClass(){
    if(this.isMouseOver){
      this.selectedValue = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
