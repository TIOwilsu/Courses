import { ICommand } from "../interfaces/ICommand";

export class ReadFileCommand implements ICommand {
  private _path: string;

  constructor(path: string) {
    this._path = path;
  }

  public execute(): void {
    console.log(`The file in path "${this._path}" is reading...`);
  }

  public undo(): void {
    console.log(`The file in path "${this._path}" is deleting...`);
  }
}
