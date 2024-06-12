import { ITool } from "../interfaces/Tool";

export class Canvas {
  private _tool: ITool;

  constructor(tool: ITool) {
    this._tool = tool;
  }

  public setTool(tool: ITool): void {
    this._tool = tool;
  }

  public onMouseDown(): void {
    this._tool.onMouseDown();
  }

  public onMouseUp(): void {
    this._tool.onMouseUp();
  }
}
