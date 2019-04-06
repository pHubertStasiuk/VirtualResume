import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stickyNavbar: Boolean = false;
  constructor() { }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    const position = event.target.documentElement.scrollTop;
    if (position > 80) {
      this.stickyNavbar = true;
    } else if (this.stickyNavbar && position < 70) {
      this.stickyNavbar = false;
    }
  }
}
