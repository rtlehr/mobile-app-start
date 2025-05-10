import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/angular/standalone';

import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

import { SqlTestComponent } from 'src/app/components/sql-test/sql-test.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, SqlTestComponent],
})
export class HomePage {
  constructor() {
    addIcons({ logoIonic });
  }
}
