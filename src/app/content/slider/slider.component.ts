import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imageArray = [ 
    { img : '../../../assets/images/Bread.jpg'},
    { img : '../../../assets/images/Combination.jpg'},
    { img : '../../../assets/images/Pasta.jpg'},
    { img : '../../../assets/images/Blog1.jpg'},
    { img : '../../../assets/images/Blog2.jpg'}
]


  constructor() { }

  ngOnInit() {
  }

}
