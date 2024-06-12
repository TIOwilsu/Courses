import { ICommand } from "../interfaces/ICommand";

export class CreateFileCommand implements ICommand {
  private _path: string;

  constructor(path: string) {
    this._path = path;
  }

  public execute(): void {
    console.log(`The file in path "${this._path}" is creating...`);
  }

  public undo(): void {
    console.log(`The file in path "${this._path}" is deleting...`);
  }
}
