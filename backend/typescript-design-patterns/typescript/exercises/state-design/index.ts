import { BrushTool } from "./models/BrushTool";
import { Canvas } from "./models/Canvas";
import { EraserTool } from "./models/EraserTool";
import { SelectionTool } from "./models/SelectionTool";

const canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new BrushTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new EraserTool());
canvas.onMouseDown();
canvas.onMouseUp();
