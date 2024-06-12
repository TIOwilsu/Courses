import { IMySQLDatabase } from "../interfaces/MySQLDatabase";

export class MySQLDatabase implements IMySQLDatabase {
  public connectToMySQL(uri: string): void {
    console.log(`Connecting to MySQL at ${uri}`);
  }

  public executeMySQLQuery(query: string): void {
    console.log(`Executed MySQL query: ${query}`);
  }
}
