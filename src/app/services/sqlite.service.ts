// src/app/services/sqlite.service.ts
import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import initSqlJs, { SqlJsStatic, Database as SqlJsDatabase } from 'sql.js';

@Injectable({
  providedIn: 'root',
})
export class SqliteService {
  private sqlite: SQLiteConnection | null = null;
  private db: SQLiteDBConnection | null = null;
  private sqlJsDb: SqlJsDatabase | null = null;
  private isBrowser = Capacitor.getPlatform() === 'web';

  constructor() {}

  async initialize(): Promise<void> {
    if (this.isBrowser) {
      // —— Browser (sql.js) ——
      const SQL = (await initSqlJs({
        locateFile: (file: string) => `/assets/${file}`,
      })) as SqlJsStatic;
      this.sqlJsDb = new SQL.Database();
      console.log('sql.js initialized for browser');
    } else {
      // —— Native (Capacitor SQLite) ——
      // 1) create the SQLiteConnection instance
      this.sqlite = new SQLiteConnection(CapacitorSQLite);
      // 2) open (or create) your named DB
      this.db = await this.sqlite.createConnection(
        'myapp',        // database name
        false,          // encrypted?
        'no-encryption',// encryption mode
        1,              // version
        false           // readonly?
      );

      await this.db.open();
      console.log('Capacitor SQLite initialized for native');
    }
  }

async executeQuery(
  query: string,
  params: any[] = []
): Promise<{ values: any[] }> {
  // —— Browser (sql.js) ——
  if (this.isBrowser) {
    if (!this.sqlJsDb) {
      throw new Error('sql.js not initialized');
    }

    const stmt = this.sqlJsDb.prepare(query);
    stmt.bind(params);

    const results: any[] = [];
    while (stmt.step()) {
      results.push(stmt.getAsObject());
    }
    stmt.free();

    return { values: results };
  }

  // —— Native (Capacitor SQLite) ——
  if (!this.db) {
    throw new Error('Database not initialized');
  }

  const ret = await this.db.query(query, params);
  // ensure ret.values is always an array
  return { values: ret.values ?? [] };
}

  async close(): Promise<void> {
    if (this.isBrowser) {
      this.sqlJsDb?.close();
      this.sqlJsDb = null;
    } else {
      if (this.db) {
        await this.db.close();
        this.db = null;
      }
      if (this.sqlite) {
        await this.sqlite.closeAllConnections();
        this.sqlite = null;
      }
    }
  }
}
