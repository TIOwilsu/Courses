import { IRectangle } from "../interfaces/Rectangle";
import { IShape } from "../interfaces/Shape";
import { IShapeProprieties } from "../interfaces/ShapeProprieties";
import { Shape } from "./Shape";

export class Rectangle extends Shape implements IRectangle {
  public height: number;
  public width: number;

  constructor(proprieties: IShapeProprieties, height: number, width: number) {
    super(proprieties);
    this.height = height;
    this.width = width;
  }

  public clone(): IShape {
    const clonedProprieties = { ...this.proprieties };
    return new Rectangle(clonedProprieties, this.height, this.width);
  }
}
