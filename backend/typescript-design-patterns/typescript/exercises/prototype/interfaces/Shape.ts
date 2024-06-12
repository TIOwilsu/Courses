import { IShapeProprieties } from "./ShapeProprieties";

export interface IShape {
  proprieties: IShapeProprieties;
  clone(): IShape;
}
