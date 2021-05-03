import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latest-from-blog',
  templateUrl: './latest-from-blog.component.html',
  styleUrls: ['./latest-from-blog.component.scss'],
})
export class LatestFromBlogComponent
  implements OnInit, AfterViewInit, OnChanges {
  // @ViewChildren('postInfo') postInfo:QueryList<any>;
  @ViewChildren('postInfo') postInfo:any;

  images = [
    'url(../../../../assets/images/blog/blog-1.png)',
    'url(../../../../assets/images/blog/blog-2.png)',
    'url(../../../../assets/images/blog/blog-3.png)',
    'url(../../../../assets/images/blog/blog-4.png)',
  ];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1,
      },
      850: {
        items: 2,
      },
      1300: {
        items: 3,
      },
      1800: {
        items: 4,
      },
    },
    nav: false,
    margin: 70,
  };
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.getDescriptionBlockHeight();
  }

  ngOnChanges(): void {}

  getDescriptionBlockHeight() {
    const infoArray = this.postInfo._results

    infoArray.map(element => {
      console.log(element.nativeElement.clientHeight)
      console.log(element.nativeElement.scrollHeight)
      console.log(element.nativeElement.offsetHeight)
    });
  }
}
