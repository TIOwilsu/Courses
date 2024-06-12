import { CoffeeDecorator } from "./CoffeeDecorator";

export class MilkDecorator extends CoffeeDecorator {
  public cost(): number {
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}
