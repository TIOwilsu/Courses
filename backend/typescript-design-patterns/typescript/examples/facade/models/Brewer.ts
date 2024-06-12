import { IBrewer } from "../interfaces/Brewer";

export class Brewer implements IBrewer {
  public brewCoffee(): void {
    console.log("Brewing Coffee...");
  }
}
