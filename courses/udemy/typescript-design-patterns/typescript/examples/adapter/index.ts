import { Square } from "./models/Square";
import { SquareToRectangleAdapter } from "./models/SquareToRectangleAdapter";

const square = new Square(5);
const adapter = new SquareToRectangleAdapter(square);

console.log(adapter.getHeight());
console.log(adapter.getWidth());
console.log(adapter.area());
console.log(adapter);
