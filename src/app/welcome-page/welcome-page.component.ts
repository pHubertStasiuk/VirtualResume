import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  frameZone: any;
  particleAnimation: {};
  particleParameters: {};
  width: number = 100;
  height: number = 100;

  constructor() { }

  ngOnInit() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

    this.frameZone = Array.from(document.querySelectorAll('a[href^="#"]'));
    this.frameZone.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

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

  navigateTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }
}
