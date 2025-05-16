import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    data: { hideChrome: false }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'clock',
    loadComponent: () => import('./pages/clock/clock.page').then( m => m.ClockPage),
    data: { hideChrome: false }
  },
  {
    path: 'files',
    loadComponent: () => import('./pages/files/files.page').then( m => m.FilesPage),
    data: { hideChrome: false }
  },
  {
    path: 'person',
    loadComponent: () => import('./pages/person/person.page').then( m => m.PersonPage),
    data: { hideChrome: true }
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar.page').then( m => m.CalendarPage),
    data: { hideChrome: false }
  },
];
