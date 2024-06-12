import { ISquare } from "../interfaces/ISquare";

export class SquareToRectangleAdapter {
  private _square: ISquare;

  constructor(square: ISquare) {
    this._square = square;
  }

  public getHeight(): number {
    return this._square.getSide();
  }

  public getWidth(): number {
    return this._square.getSide();
  }

  public area(): number {
    return this._square.area();
  }
}
