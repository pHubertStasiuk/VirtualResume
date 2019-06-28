import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

declare interface MenuItem {
  label: string;
  routerLink: string;
  style?: string;
}


export const menuItems: MenuItem[] = [
  {
    label: 'Home', routerLink: '/home'
  },
  {
    label: 'Skills', routerLink: '/skills'
  },
  {
    label: 'Experience', routerLink: '/experience'
  },
  {
    label: 'Portfolio', routerLink: '/portfolio'
  },
  {
    label: 'About', routerLink: '/about'
  },
  {
    label: 'Contact Me', routerLink: '/contact-me'
  }];

// export const menuIcons: MenuItem[] = [
//   {
//     label: 'Home', routerLink: '/home', style: 'nav-link hvr-grow'
//   },
// ];



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stickyNavbar: Boolean = false;

  color = 'warn';
  isChecked = false;
  menuItems: any[];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.menuItems = menuItems.filter(menuItem => menuItem);
  }


  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    const position = event.target.documentElement.scrollTop;
    if (position > 80) {
      this.stickyNavbar = true;
    } else if (this.stickyNavbar && position < 70) {
      this.stickyNavbar = false;
    }
  }

  switchLanguage(language: MatSlideToggleChange) {
    if (language.checked) {
      this.isChecked = language.checked;
      this.translate.use('pl');
    } else {
      this.isChecked = language.checked;
      this.translate.use('en');
    }
  }
}
