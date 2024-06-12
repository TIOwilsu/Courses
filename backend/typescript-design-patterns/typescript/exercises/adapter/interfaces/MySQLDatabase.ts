export interface IMySQLDatabase {
  connectToMySQL(uri: string): void;
  executeMySQLQuery(query: string): void;
}
