import { ITool } from "../interfaces/Tool";

export class SelectionTool implements ITool {
  public onMouseDown(): void {
    console.log("Selection started");
  }
  public onMouseUp(): void {
    console.log("Selection draw");
  }
}
