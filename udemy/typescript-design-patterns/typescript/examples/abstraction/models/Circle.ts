import { IShape } from "../interfaces/Shape";

export class Circle implements IShape {
  private _radius: number = 0;

  constructor(radius: number) {
    this._radius = radius;
  }

  public area(): number {
    return this._radius * this._radius * Math.PI;
  }

  public perimeter(): number {
    return 2 * Math.PI * this._radius;
  }
}
