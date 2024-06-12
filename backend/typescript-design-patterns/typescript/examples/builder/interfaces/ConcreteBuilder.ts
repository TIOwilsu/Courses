import { Product } from "../models/Product";

export interface IConcreteBuilder {
  reset(): void;
  getProduct(): Product;
}
