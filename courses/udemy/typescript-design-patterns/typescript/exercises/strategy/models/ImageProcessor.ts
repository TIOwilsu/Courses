import { IFilterStrategy } from "../interfaces/FilterStrategy";

export class ImageProcessor {
  private _strategy: IFilterStrategy;

  constructor(strategy: IFilterStrategy) {
    this._strategy = strategy;
  }

  public setFilterStrategy(strategy: IFilterStrategy): void {
    this._strategy = strategy;
  }

  public applyFilter(image: string): void {
    this._strategy.apply(image);
  }
}
