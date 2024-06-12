import { IShape } from "../interfaces/Shape";
import { IShapeService } from "../interfaces/ShapeService";

export class ShapeService implements IShapeService {
  public calculateTotalArea(shape: IShape): number {
    return shape.area();
  }
}
