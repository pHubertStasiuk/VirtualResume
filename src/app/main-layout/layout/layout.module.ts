import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/components/components.module';
import { LayoutRoutes } from './layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from 'src/app/components/about/about.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';


const components = [
  HomeComponent,
  AboutComponent,
  SkillsComponent,
  PortfolioComponent,
  ContactComponent,
  ExperienceComponent
];

@NgModule({
  declarations: [...components],

  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(LayoutRoutes)
  ],

})
export class LayoutModule { }
