import { LightSwitch } from "../models/LightSwitch";

export interface ILightState {
  switchState(lightSwitch: LightSwitch): void;
}
