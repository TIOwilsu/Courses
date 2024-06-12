import { IFilterStrategy } from "../interfaces/FilterStrategy";

export class GrayscaleStrategy implements IFilterStrategy {
  public apply(image: string): void {
    console.log(`Applying grayscale filter to ${image}`);
  }
}
