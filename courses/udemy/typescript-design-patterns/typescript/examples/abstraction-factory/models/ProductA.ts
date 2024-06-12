import { IProductA } from "../interfaces/ProductA";

export class ProductA implements IProductA {
  public operationA(): string {
    return "This is the result of Operation A";
  }
}
