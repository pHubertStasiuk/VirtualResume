import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import {GMapModule} from 'primeng/gmap';
import { HomeSkillsComponent } from './home/home-skills/home-skills.component';
import { HomeExperienceComponent } from './home/home-experience/home-experience.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomePortfolioComponent } from './home/home-portfolio/home-portfolio.component';

@NgModule({
  declarations: [
    ExperienceComponent,
    AboutComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    PortfolioComponent,
    HomeSkillsComponent,
    HomeExperienceComponent,
    HomeAboutComponent,
    HomePortfolioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    ChartModule,
    GMapModule
  ]
})
export class ComponentsModule { }
