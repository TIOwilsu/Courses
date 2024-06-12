import { Circle } from "./models/Circle";
import { Rectangle } from "./models/Rectangle";
import { ShapeService } from "./services/ShapeService";

const shapeService = new ShapeService();
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(`Area of Circle: ${shapeService.calculateTotalArea(circle)}`);
console.log(`Area of Rectangle: ${shapeService.calculateTotalArea(rectangle)}`);
