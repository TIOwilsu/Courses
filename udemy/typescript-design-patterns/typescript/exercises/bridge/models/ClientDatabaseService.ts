import { DatabaseService } from "./DatabaseService";

export class ClientDatabaseService extends DatabaseService {
  public fetchData(query: string): any {
    this.database.connect();
    this.database.query(query);
    this.database.close();
  }
}
