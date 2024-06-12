import { IDatabase } from "../interfaces/Database";
import { IDatabaseService } from "../interfaces/DatabaseService";

export abstract class DatabaseService implements IDatabaseService {
  protected database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  public abstract fetchData(query: string): any;
}
