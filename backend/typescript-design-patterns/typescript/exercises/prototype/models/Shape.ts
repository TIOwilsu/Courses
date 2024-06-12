import { IShape } from "../interfaces/Shape";
import { IShapeProprieties } from "../interfaces/ShapeProprieties";

export abstract class Shape implements IShape {
  public proprieties: IShapeProprieties;

  constructor(proprieties: IShapeProprieties) {
    this.proprieties = proprieties;
  }

  public abstract clone(): IShape;
}
