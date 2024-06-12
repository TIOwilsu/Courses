import { ISquare } from "../interfaces/ISquare";

export class Square implements ISquare {
  private _side: number;

  constructor(side: number) {
    this._side = side;
  }

  public getSide(): number {
    return this._side;
  }

  public area(): number {
    return this._side * this._side;
  }
}
