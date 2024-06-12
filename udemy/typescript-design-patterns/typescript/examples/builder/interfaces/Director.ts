import { IBuilder } from "./Builder";

export interface IDirector {
  setBuilder(builder: IBuilder): void;
  buildMinimalViableProduct(): void;
  buildFullFeatureProduct(): void;
}
