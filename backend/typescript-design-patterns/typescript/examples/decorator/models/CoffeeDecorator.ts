import { ICoffee } from "../interfaces/Coffee";

export abstract class CoffeeDecorator implements ICoffee {
  protected coffee: ICoffee;

  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }

  public abstract cost(): number;

  public abstract description(): string;
}
