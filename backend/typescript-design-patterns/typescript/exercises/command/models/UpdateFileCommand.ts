import { ICommand } from "../interfaces/ICommand";

export class UpdateFileCommand implements ICommand {
  private _path: string;
  private _newContent: string;
  private _oldContent: string;

  constructor(path: string, newContent: string, oldContent: string) {
    this._path = path;
    this._newContent = newContent;
    this._oldContent = oldContent;
  }

  public execute(): void {
    console.log(
      `Updating the file in path "${this._path}", new content: ${this._newContent}, oldContent: ${this._oldContent}`
    );
  }

  public undo(): void {
    console.log(
      `Reverting the file in path "${this._path}", new content: ${this._newContent}, oldContent: ${this._oldContent}`
    );
  }
}
