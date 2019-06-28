import { Component, OnInit, HostListener } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state = 'show';
  navTop = 'hide';
  particleAnimation: {};
  particleParameters: {};
  width: number = 100;
  height: number = 100;

  constructor(private fileService: FileService) { }

  ngOnInit() {

    this.particleStyle();
  }

  particleStyle() {
    this.particleAnimation = {
      'position': 'absolute',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.particleParameters = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#9cdeef'
        },
        shape: {
          'type': 'circle'
        }
      }
    };
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {

    const scrollPosition = window.pageYOffset;
    if (scrollPosition <= 250) {
      this.state = 'show';
      this.navTop = 'hide';
    } else {
      this.state = 'hide';
      this.navTop = 'show';
    }
  }
  navigateTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  getResume() {
    this.fileService.getResume();
  }
}
