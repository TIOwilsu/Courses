import { IBoiler } from "../interfaces/Boiler";
import { IBrewer } from "../interfaces/Brewer";
import { ICoffeeMakerFacade } from "../interfaces/CoffeeMakerFacade";
import { IGrinder } from "../interfaces/Grinder";

export class CoffeeMakerFacade implements ICoffeeMakerFacade {
  private _grinder: IGrinder;
  private _boiler: IBoiler;
  private _brewer: IBrewer;

  constructor(grinder: IGrinder, boiler: IBoiler, brewer: IBrewer) {
    this._grinder = grinder;
    this._boiler = boiler;
    this._brewer = brewer;
  }

  public makeCoffee(): void {
    this._grinder.grindBeans();
    this._boiler.boilWater();
    this._brewer.brewCoffee();
    console.log("The Coffee is ready");
  }
}
