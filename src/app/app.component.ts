import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
  IonIcon
} from '@ionic/angular/standalone';
import { RouterOutlet, RouterModule } from '@angular/router'; // ✅ Add RouterModule here
import { addIcons } from 'ionicons';
import { albums, body, calendar, logoIonic, time } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
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
    IonCol,
    IonGrid,
    IonRow,
    IonIcon,
    IonButton
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    addIcons({ logoIonic, calendar, body, albums, time });
  }
}
