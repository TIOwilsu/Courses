import { MilkDecorator } from "./models/MilkDecorator";
import { SimpleCoffee } from "./models/SimpleCoffee";

const coffee = new SimpleCoffee(10, "Simple coffee");
const milk = new MilkDecorator(coffee);

console.log(`Milk cost: ${milk.cost()}`);
console.log(`Milk description: ${milk.description()}`);
