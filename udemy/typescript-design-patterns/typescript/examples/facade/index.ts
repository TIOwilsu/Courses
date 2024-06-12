import { Boiler } from "./models/Boiler";
import { Brewer } from "./models/Brewer";
import { CoffeeMakerFacade } from "./models/CoffeeMakerFacade";
import { Grinder } from "./models/Grinder";

const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();
