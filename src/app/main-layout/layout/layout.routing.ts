import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ExperienceComponent } from 'src/app/components/experience/experience.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';

export const LayoutRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact-me', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path : 'experience', component: ExperienceComponent}
];
