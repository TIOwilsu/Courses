import { ILightState } from "../interfaces/LightState";
import { LightSwitch } from "./LightSwitch";
import { OffState } from "./OffState";

export class OnState implements ILightState {
  public switchState(lightSwitch: LightSwitch) {
    console.log("Light state is on. Turning off ...");
    lightSwitch.setState(new OffState());
  }
}
