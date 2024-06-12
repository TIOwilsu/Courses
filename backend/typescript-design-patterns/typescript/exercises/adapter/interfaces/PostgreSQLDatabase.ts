export interface IPostgreSQLDatabase {
  connectToPostgreSQL(uri: string): void;
  executePostgreSQLQuery(query: string): void;
}
