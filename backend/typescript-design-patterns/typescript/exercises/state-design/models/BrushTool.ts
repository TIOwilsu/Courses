import { ITool } from "../interfaces/Tool";

export class BrushTool implements ITool {
  public onMouseDown(): void {
    console.log("Brush stroke started");
  }
  public onMouseUp(): void {
    console.log("Brush stroke drawn");
  }
}
