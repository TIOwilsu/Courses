import { ICommand } from "../interfaces/Command";
import { Light } from "./Light";

export class TurnOnCommand implements ICommand {
  private _light: Light;

  constructor(light: Light) {
    this._light = light;
  }

  public execute(): void {
    this._light.turnOn();
  }

  public undo(): void {
    this._light.turnOff();
  }
}
