import { IBoiler } from "../interfaces/Boiler";

export class Boiler implements IBoiler {
  public boilWater(): void {
    console.log("Boiling Water...");
  }
}
