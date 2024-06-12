import { IProductA } from "./ProductA";

export interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}
