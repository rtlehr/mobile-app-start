import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UiService } from './services/ui/ui.service';

import { CommonModule } from '@angular/common';

import {
  IonApp,
  IonHeader,
  IonToolbar, 
  IonButtons,
  IonBackButton,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonFooter,
  IonMenu,
  IonRouterOutlet,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';
import { RouterModule, RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoIonic, calendar, body, albums, time } from 'ionicons/icons';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    IonApp,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonFooter,
    IonMenu,
    IonRouterOutlet,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    SplashScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit  {
  
  public isAppReady = false;

  constructor(private router: Router, private platform: Platform, private ui: UiService) {
    addIcons({ logoIonic, calendar, body, albums, time });
  }

  async ngOnInit() {
    // wait for Cordova/Capacitor + Ionic to be ready
    await this.platform.ready();

    // — optional: initialize your SQLite DB or other plugins here —
    // await this.sqliteService.initializeDatabase();

    // hide the native splash (configured in capacitor.config.json)
    await SplashScreen.hide();

    // now show your real UI
    this.isAppReady = true;

  }

  ngAfterViewInit() {
    
    this.ui.init();
    
    this.router.events
      .pipe(
        filter((e): e is ActivationEnd => e instanceof ActivationEnd)
      )
      .subscribe(e => {
        // <-- bracket notation here
        const hide = !!e.snapshot.data['hideChrome'];

        console.log("hide: " + hide);

        if (hide) {
          this.ui.hideHeader();
          this.ui.hideFooter();
        } else {
          this.ui.showHeader();
          this.ui.showFooter();
        }
      });

  }
}
