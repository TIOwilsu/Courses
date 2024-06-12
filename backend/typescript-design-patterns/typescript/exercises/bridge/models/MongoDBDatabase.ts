import { IDatabase } from "../interfaces/Database";

export class MongoDBDatabase implements IDatabase {
  public connect(): void {
    console.log("Connected on MongoDB");
  }

  public query(sql: string): void {
    console.log(`It was run query "${sql}" on MongoDB`);
  }

  public close(): void {
    console.log("Closed MongoDB");
  }
}
