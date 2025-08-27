import { Routes } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SupportComponent } from './support/support.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'apps', component: AppsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'support', component: SupportComponent },
];

