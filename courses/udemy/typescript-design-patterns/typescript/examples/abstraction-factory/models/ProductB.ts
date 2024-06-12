import { IProductA } from "../interfaces/ProductA";
import { IProductB } from "../interfaces/ProductB";

export class ProductB implements IProductB {
  public operationB(): string {
    return "This is the result of Operation B";
  }
  public combinedOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();
    return `The result of Product B Collaborating with (${result})`;
  }
}
