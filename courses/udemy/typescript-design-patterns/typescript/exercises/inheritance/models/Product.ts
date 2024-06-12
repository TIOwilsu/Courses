import { IProduct } from "../interfaces/Product";

export class Product implements IProduct {
  public id: string;
  public price: number;
  public description: string;

  constructor(id: string, price: number, description: string) {
    this.id = id;
    this.price = price;
    this.description = description;
  }

  public display(): void {
    console.log(
      `ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`
    );
  }
}
