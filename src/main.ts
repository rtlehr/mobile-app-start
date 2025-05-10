// src/main.ts
import { enableProdMode, APP_INITIALIZER } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withPreloading,
  PreloadAllModules,
  RouteReuseStrategy,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, settings } from 'ionicons/icons';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';
import { SqliteService } from './app/services/sqlite.service';

if (environment.production) {
  enableProdMode();
}

// Register Ionicons
addIcons({ home, settings });

// Factory for APP_INITIALIZER
export function initSqlite(sqlite: SqliteService) {
  return () => sqlite.initialize();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter(routes, withPreloading(PreloadAllModules)),
    SqliteService,
    {
      provide: APP_INITIALIZER,
      useFactory: initSqlite,
      deps: [SqliteService],
      multi: true,
    },
  ],
}).catch(err => console.error(err));
