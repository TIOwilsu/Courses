import { IProduct } from "../interfaces/Product";

export class Product implements IProduct {
  private _parts: string[] = [];

  public add(part: string): void {
    this._parts.push(part);
  }

  public listParts(): void {}
}
