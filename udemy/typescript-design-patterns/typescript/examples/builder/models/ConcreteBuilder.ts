import { IBuilder } from "../interfaces/Builder";
import { IConcreteBuilder } from "../interfaces/ConcreteBuilder";
import { Product } from "./Product";

export class ConcreteBuilder implements IConcreteBuilder, IBuilder {
  private _product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this._product = new Product();
  }

  public setPartA(): void {
    this._product.add("PartA");
  }

  public setPartB(): void {
    this._product.add("PartB");
  }

  public setPartC(): void {
    this._product.add("PartC");
  }

  public getProduct(): Product {
    const result = this._product;
    this.reset();
    return result;
  }
}
