import { Developer } from "./models/Developer";
import { Designer } from "./models/Designer";
import { Manager } from "./models/Manager";

const dev1 = new Developer("Lionel Messi", 10000);
const dev2 = new Developer("Cristiano Ronaldo", 12000);
const designer = new Designer("Xabi alonso", 8000);
const manager = new Manager("Guardiola", 60000);

manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(designer);
manager.removeEmployee(dev1);

console.log(manager);
