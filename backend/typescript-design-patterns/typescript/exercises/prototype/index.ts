import { IShape } from "./interfaces/Shape";
import { Rectangle } from "./models/Rectangle";

const redRectangle: IShape = new Rectangle(
  { color: "red", x: 20, y: 100 },
  10,
  20
);

const anotherRectangle: IShape = redRectangle.clone();
anotherRectangle.proprieties.color = "blue";

console.log(redRectangle);
console.log(anotherRectangle);
