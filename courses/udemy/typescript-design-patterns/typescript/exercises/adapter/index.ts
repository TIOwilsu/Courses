import { DatabaseAdapter } from "./models/DatabaseAdapter";
import { PostgresSQLDatabase } from "./models/PostgreSQLDatabase";

const adapter = new DatabaseAdapter(new PostgresSQLDatabase());
adapter.connectToMySQL("postgresql://localhost:5432/mydb");
adapter.executeMySQLQuery("SELECT * FROM users");
