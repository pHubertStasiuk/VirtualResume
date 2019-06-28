import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FadeIn } from 'src/app/animations/fadein-animation';
import { SliderFromLeft } from 'src/app/animations/slider.animation';

@Component({
  selector: 'app-home-skills',
  animations: [FadeIn, SliderFromLeft],
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.css']
})
export class HomeSkillsComponent implements OnInit {

  data: any;
  options: any;
  optionSmall: any;
  state = 'show';
  constructor(public el: ElementRef) {
    this.data = {
      datasets: [{
        data: [
          8.7,
          8.2,
          7.3,
          8.5,
          8.5
        ],
        backgroundColor: [
          "#FF6384",
          "#54F3AD",
          "#4BC0C0",
          "#FFCE56",
          "#36A2EB"
        ],
        label: 'Web Technology and Framework'
      }],
      labels: [
        "JavaScript",
        "TypeScript",
        "SQL",
        "NoSQL",
        "CSS"
      ]
    }

    this.options = {
      title: {
        display: true,
        text: '',
        fontSize: 16,
        fontColor: 'white'
      },
      legend: {
        position: 'right',
      },
    };

    this.optionSmall = {
      title: {
        display: true,
        text: '',
        fontSize: 16,
        fontColor: 'white'
      },
      legend: {

        position: 'top',
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }

  @HostListener('window:scroll', ['$event']) checkScroll() {

    const div = document.getElementById('section-skills').offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= div - 500) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }

  }

  ngOnInit() {
  }

}
