import { IPostgreSQLDatabase } from "../interfaces/PostgreSQLDatabase";

export class PostgresSQLDatabase implements IPostgreSQLDatabase {
  public connectToPostgreSQL(uri: string): void {
    console.log(`Connecting to PostgreSQL at ${uri}`);
  }

  public executePostgreSQLQuery(query: string): void {
    console.log(`Executed PostgreSQL query: ${query}`);
  }
}
