import { IFileSystemComponent } from "./FileSystemComponent";

export interface ICompositeFileSystemComponent {
  addComponent(component: IFileSystemComponent): void;
  removeComponent(component: IFileSystemComponent): void;
  getComponents(): IFileSystemComponent[];
}
