import { IElectronic } from "../interfaces/Electronic";
import { Product } from "./Product";

export class Electronic extends Product implements IElectronic {
  public brand: string;
  public model: string;

  constructor(
    id: string,
    price: number,
    description: string,
    brand: string,
    model: string
  ) {
    super(id, price, description);
    this.brand = brand;
    this.model = model;
  }

  public display(): void {
    super.display();
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}
