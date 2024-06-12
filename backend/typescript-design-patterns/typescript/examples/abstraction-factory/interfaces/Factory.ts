import { IProductA } from "./ProductA";
import { IProductB } from "./ProductB";

export interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}
