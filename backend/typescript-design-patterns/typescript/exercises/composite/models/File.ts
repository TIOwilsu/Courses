import { IFileSystemComponent } from "../interfaces/FileSystemComponent";

export class File implements IFileSystemComponent {
  private _name: string;
  private _size: number;

  constructor(name: string, size: number) {
    this._name = name;
    this._size = size;
  }

  public getName(): string {
    return this._name;
  }

  public getSize(): number {
    return this._size;
  }
}
