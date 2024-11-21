import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { canMatchFeature } from './shared/feature-management/feature.guard';

// routes are "modes" our application can be in.
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'gifts',
    canMatch: [canMatchFeature('gift-giving')],
    loadChildren: () =>
      import('./features/gifts/gifts.routs').then((r) => r.GIFT_ROUTES),
  },
  {
    path: 'atm',
    canMatch: [canMatchFeature('atm')],
    loadChildren: () =>
      import('./features/atm/atm.routes').then((r) => r.ATM_ROUTES),
  },
  {
    path: 'counter',
    canMatch: [canMatchFeature('counter')],
    loadChildren: () =>
      import('./features/counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
