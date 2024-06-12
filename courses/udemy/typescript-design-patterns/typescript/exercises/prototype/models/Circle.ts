import { ICircle } from "../interfaces/Circle";
import { IShape } from "../interfaces/Shape";
import { IShapeProprieties } from "../interfaces/ShapeProprieties";
import { Shape } from "./Shape";

export class Circle extends Shape implements ICircle {
  public radius: number;

  constructor(proprieties: IShapeProprieties, radius: number) {
    super(proprieties);
    this.radius = radius;
  }

  public clone(): IShape {
    const clonedProprieties = { ...this.proprieties };
    return new Circle(clonedProprieties, this.radius);
  }
}
