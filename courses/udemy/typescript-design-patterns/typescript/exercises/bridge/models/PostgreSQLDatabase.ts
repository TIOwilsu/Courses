import { IDatabase } from "../interfaces/Database";

export class PostgreSQLDatabase implements IDatabase {
  public connect(): void {
    console.log("Connected on PostgreSQL");
  }

  public query(sql: string): void {
    console.log(`It was run query "${sql}" on PostgreSQL`);
  }

  public close(): void {
    console.log("Closed PostgreSQL");
  }
}
