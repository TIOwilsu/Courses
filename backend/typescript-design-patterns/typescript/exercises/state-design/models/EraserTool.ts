import { ITool } from "../interfaces/Tool";

export class EraserTool implements ITool {
  public onMouseDown(): void {
    console.log("Eraser started");
  }
  public onMouseUp(): void {
    console.log("Erased");
  }
}
