import { IShape } from "./Shape";

export interface IShapeService {
  calculateTotalArea: (shape: IShape) => number;
}
