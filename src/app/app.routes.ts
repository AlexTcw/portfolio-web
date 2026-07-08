import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Resume } from './components/resume/resume';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'portfolio', component: Portfolio, title: 'Portfolio' },
  { path: 'resume', component: Resume, title: 'Resume' },
];
