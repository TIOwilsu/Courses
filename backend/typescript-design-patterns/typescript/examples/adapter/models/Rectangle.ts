export class Rectangle {
  private _height: number;
  private _width: number;

  constructor(height: number, width: number) {
    this._height = height;
    this._width = width;
  }

  public getHeight(): number {
    return this._height;
  }

  public getWidth(): number {
    return this._width;
  }

  public area(): number {
    return this._height * this._width;
  }
}
