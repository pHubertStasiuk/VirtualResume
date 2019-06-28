import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutes } from './layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from 'src/app/components/about/about.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { ParticlesModule } from 'angular-particle';
import { ChartModule } from 'primeng/chart';
import {CaptchaModule} from 'primeng/captcha';
import { GMapModule } from 'primeng/gmap';
import { HomeSkillsComponent } from 'src/app/components/home/home-skills/home-skills.component';

const components = [
  HomeComponent,
  AboutComponent,
  SkillsComponent,
  PortfolioComponent,
  ContactComponent,
  ExperienceComponent,
  HomeSkillsComponent
];

@NgModule({
  declarations: [...components],

  imports: [
    CommonModule,
    NgbModule,
    ParticlesModule,
    ChartModule,
    CaptchaModule,
    GMapModule,
    RouterModule.forChild(LayoutRoutes)
  ],

})
export class LayoutModule { }
