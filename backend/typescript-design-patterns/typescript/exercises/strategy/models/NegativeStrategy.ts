import { IFilterStrategy } from "../interfaces/FilterStrategy";

export class NegativeStrategy implements IFilterStrategy {
  public apply(image: string): void {
    console.log(`Applying negative filter to ${image}`);
  }
}
