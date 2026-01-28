import { DBObject, DBRecord } from '$/json';
import { surrealdbWasmEngines } from '@surrealdb/wasm';
import { Surreal } from 'surrealdb';

export default class Db {
  private static _db: Surreal;

  static async init() {
    if (!Db._db) {
      const db = new Surreal({ engines: surrealdbWasmEngines() });
      db.connect('indxdb://demo');
      await db.ready;
      db.use({ namespace: 'demo', database: 'demo' });
      Db._db = db;
    }
  }

  static get db() {
    return Db._db;
  }

  static async select<T extends DBObject>(name: string) {
    return Db.db.select<T>(name);
  }

  static async insert<T extends DBRecord>(name: string, data: T) {
    return Db.db.insert(name, data);
  }
}

await Db.init();
