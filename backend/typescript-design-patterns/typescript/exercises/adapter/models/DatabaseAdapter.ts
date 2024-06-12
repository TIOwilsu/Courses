import { IPostgreSQLDatabase } from "../interfaces/PostgreSQLDatabase";

export class DatabaseAdapter {
  private _postgreSQL: IPostgreSQLDatabase;

  constructor(postgreSQL: IPostgreSQLDatabase) {
    this._postgreSQL = postgreSQL;
  }

  public connectToMySQL(uri: string): void {
    this._postgreSQL.connectToPostgreSQL(uri);
  }

  public executeMySQLQuery(query: string): void {
    this._postgreSQL.executePostgreSQLQuery(query);
  }
}
