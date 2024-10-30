import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    loadComponent: () => import('@/calculator/views/calculator-views/calculator-views.component'),
  },
  {
    path: '**',
    redirectTo: 'calculator',
  }
];
