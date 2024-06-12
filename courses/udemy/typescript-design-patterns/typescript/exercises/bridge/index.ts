import { IDatabase } from "./interfaces/Database";
import { ClientDatabaseService } from "./models/ClientDatabaseService";
import { MongoDBDatabase } from "./models/MongoDBDatabase";
import { PostgreSQLDatabase } from "./models/PostgreSQLDatabase";

const fetchData = (database: IDatabase, query: string) => {
  const clientDatabaseService = new ClientDatabaseService(database);
  clientDatabaseService.fetchData(query);
};

fetchData(new MongoDBDatabase(), "SELECT NAME FROM USER");
fetchData(new PostgreSQLDatabase(), "SELECT NAME FROM PRODUCT");
