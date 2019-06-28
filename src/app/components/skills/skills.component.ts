import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { SliderFromLeft } from 'src/app/animations/slider.animation';
import { FadeIn } from 'src/app/animations/fadein-animation';
import { mainAnimations } from 'src/app/animations/all-animations';
import { style } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  animations: [FadeIn, SliderFromLeft, mainAnimations],
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  data: any;
  options: any;
  optionSmall: any;
  state = 'hide';

  constructor(public el: ElementRef) {
    this.data = {
      datasets: [{
        data: [
          92,
          60,
          40,
          70,
          80
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB'
        ],
        label: 'ORM AND DATABASES'
      }],
      labels: [
        'MySQL',
        'Hibernate',
        'SpringData',
        'HSQL',
        'JDBC'
      ],
    }

    this.options = {
      animation: {
        duration: 1500,
        easing: 'easeInOutCubic'
      },
      legend: {
        position: 'bottom'
      }
    }
    setTimeout(() => { this.state = 'show'; }, 15);

  }
  ngOnInit() {

  }


}
