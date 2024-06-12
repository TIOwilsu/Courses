import { IShape } from "../interfaces/Shape";

export class Rectangle implements IShape {
  private _height: number = 0;
  private _width: number = 0;

  constructor(height: number, width: number) {
    this._height = height;
    this._width = width;
  }

  public area(): number {
    return this._height * this._width;
  }

  public perimeter(): number {
    return 2 * (this._height + this._width);
  }
}
