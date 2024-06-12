import { ICar } from "../interfaces/Car";

export abstract class Car implements ICar {
  public model: string;
  public productionYear: number;

  constructor(model: string, productionYear: number) {
    this.model = model;
    this.productionYear = productionYear;
  }

  public abstract displayCarInfo(): void;
}
