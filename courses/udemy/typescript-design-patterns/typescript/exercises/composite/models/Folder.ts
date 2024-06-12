import { ICompositeFileSystemComponent } from "../interfaces/CompositeFileSystemComponent";
import { IFileSystemComponent } from "../interfaces/FileSystemComponent";

export class Folder
  implements ICompositeFileSystemComponent, IFileSystemComponent
{
  private _name: string;
  private _size: number;
  private _components: IFileSystemComponent[] = [];

  constructor(name: string) {
    this._name = name;
  }

  public getName(): string {
    return this._name;
  }

  public getSize(): number {
    return this._components.reduce((total, component) => {
      total += component.getSize();
      return total;
    }, 0);
  }

  public addComponent(component: IFileSystemComponent): void {
    this._components.push(component);
  }

  public removeComponent(component: IFileSystemComponent): void {
    const index = this._components.indexOf(component);

    if (index !== -1) {
      this._components.splice(index, 1);
    }
  }

  public getComponents(): IFileSystemComponent[] {
    return this._components;
  }
}
