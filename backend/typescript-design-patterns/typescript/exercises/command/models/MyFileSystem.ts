import { ICommand } from "../interfaces/ICommand";

export class MyFileSystem {
  private _commandQueue: ICommand[] = [];

  public addCommand(command: ICommand): void {
    this._commandQueue.push(command);
  }

  public executeCommand(): void {
    if (this.hasCommand()) {
      const command = this._commandQueue.shift();
      command?.execute();
    }
  }

  public undoCommand(): void {
    if (this.hasCommand()) {
      const command = this._commandQueue.pop();
      command?.undo();
    }
  }

  public hasCommand(): boolean {
    return this._commandQueue.length > 0;
  }
}
