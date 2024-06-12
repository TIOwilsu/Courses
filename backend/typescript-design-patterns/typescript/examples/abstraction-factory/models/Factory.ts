import { IFactory } from "../interfaces/Factory";
import { IProductA } from "../interfaces/ProductA";
import { IProductB } from "../interfaces/ProductB";
import { ProductA } from "./ProductA";
import { ProductB } from "./ProductB";

export class Factory implements IFactory {
  createProductA(): IProductA {
    return new ProductA();
  }

  createProductB(): IProductB {
    return new ProductB();
  }
}
