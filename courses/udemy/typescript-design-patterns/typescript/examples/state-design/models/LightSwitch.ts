import { ILightState } from "../interfaces/LightState";
import { OnState } from "./OnState";

export class LightSwitch {
  private _state: ILightState;

  constructor(state: ILightState) {
    this._state = state;
  }

  public setState(state: ILightState): void {
    this._state = state;
  }

  public press(): void {
    this._state.switchState(this);
  }
}
