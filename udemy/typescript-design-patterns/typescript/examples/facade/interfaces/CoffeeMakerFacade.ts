import { IBoiler } from "./Boiler";
import { IBrewer } from "./Brewer";
import { IGrinder } from "./Grinder";

export interface ICoffeeMakerFacade {
  makeCoffee(): void;
}
