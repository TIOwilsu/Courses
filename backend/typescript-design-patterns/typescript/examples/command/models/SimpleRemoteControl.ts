import { ICommand } from "../interfaces/Command";

export class SimpleRemoteControl {
  private _currentCommand!: ICommand;
  private _undoCommand!: ICommand;
  private _commandQueue: ICommand[] = [];

  public setCommand(command: ICommand): void {
    this._undoCommand = this._currentCommand;
    this._currentCommand = command;
    this._commandQueue.push(command);
  }

  public buttonWasPressed(): void {
    if (this._commandQueue.length) {
      const command = this._commandQueue.shift();
      command?.execute();
    }
  }

  public undoButtonWasPressed(): void {
    this._undoCommand.execute();
  }

  public hasCommand(): boolean {
    return this._commandQueue.length > 0;
  }
}
