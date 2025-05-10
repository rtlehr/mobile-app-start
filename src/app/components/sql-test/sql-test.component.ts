// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SqliteService } from '../../services/sqlite.service';

@Component({
  selector: 'app-sql-test',
  templateUrl: './sql-test.component.html',
  styleUrls: ['./sql-test.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class SqlTestComponent implements OnInit {
  results: any[] = [];

  constructor(private sqliteService: SqliteService) {}

  async ngOnInit() {
    try {
      // Create a sample table and insert data
      await this.sqliteService.executeQuery(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT
        )
      `);
      await this.sqliteService.executeQuery('INSERT INTO users (name) VALUES (?)', ['Bob Dillion']);
      await this.sqliteService.executeQuery('INSERT INTO users (name) VALUES (?)', ['Chet Cheterbrain']);
      const result = await this.sqliteService.executeQuery('SELECT * FROM users');
      this.results = result.values;
    } catch (error) {
      console.error('SQLite error:', error);
    }
  }
}
