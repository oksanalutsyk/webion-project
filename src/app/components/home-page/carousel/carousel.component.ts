import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  carousel = [
    {
      src: 'assets/images/slider-images/first-slide.png',
      title: 'CURIOSITY REWAED',
      subTitle:
        'Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos skateboard migas farm-to-table artisan kombucha.',
    },
    {
      src: 'assets/images/slider-images/second-slide.png',
      title: 'FOREST EXPLORATION',
      subTitle:
        'Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos skateboard migas farm-to-table artisan kombucha.',
    },
    {
      src: 'assets/images/slider-images/third-slide.png',
      title: ' WALKING THE CITY',
      subTitle:
        'Post-ironic authentic drinking vinegar chambray quinoa. VHS letterpress sriracha, tacos skateboard migas farm-to-table artisan kombucha.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
