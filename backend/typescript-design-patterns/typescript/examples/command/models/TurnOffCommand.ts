import { ICommand } from "../interfaces/Command";
import { Light } from "./Light";

export class TurnOffCommand implements ICommand {
  private _light: Light;

  constructor(light: Light) {
    this._light = light;
  }

  public execute(): void {
    this._light.turnOff();
  }

  public undo(): void {
    this._light.turnOn();
  }
}
