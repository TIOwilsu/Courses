import { IBuilder } from "../interfaces/Builder";
import { IDirector } from "../interfaces/Director";

export class Director implements IDirector {
  private _builder!: IBuilder;

  public setBuilder(builder: IBuilder): void {
    this._builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this._builder.setPartA();
  }

  public buildFullFeatureProduct(): void {
    this._builder.setPartA();
    this._builder.setPartB();
    this._builder.setPartC();
  }
}
