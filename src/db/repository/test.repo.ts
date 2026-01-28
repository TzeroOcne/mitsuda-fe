import { TestSchema } from '../schema/test.schema';
import Db from '../surreal';

export default class TestRepo {
  static async select(): Promise<TestSchema[]> {
    return Db.select<TestSchema>('test');
  }

  static async insert(data: TestSchema) {
    return Db.insert('test', data);
  }
}
