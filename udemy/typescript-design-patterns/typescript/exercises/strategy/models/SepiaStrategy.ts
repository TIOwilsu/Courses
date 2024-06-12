import { IFilterStrategy } from "../interfaces/FilterStrategy";

export class SepiaStrategy implements IFilterStrategy {
  public apply(image: string): void {
    console.log(`Applying sepia filter to ${image}`);
  }
}
