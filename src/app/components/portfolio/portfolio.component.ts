import { Component, OnInit, HostListener, } from '@angular/core';
import { FadeIn } from 'src/app/animations/fadein-animation';

@Component({
  selector: 'app-portfolio',
  animations: [FadeIn],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  state = 'hide';

  constructor() {

    setTimeout(() => { this.state = 'show'; }, 15);
   }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) checkScroll() {

    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 1500) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
