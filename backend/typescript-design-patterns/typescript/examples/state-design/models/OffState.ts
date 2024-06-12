import { ILightState } from "../interfaces/LightState";
import { LightSwitch } from "./LightSwitch";
import { OnState } from "./OnState";

export class OffState implements ILightState {
  public switchState(lightSwitch: LightSwitch) {
    console.log("Light state is off. Turning on ...");
    lightSwitch.setState(new OnState());
  }
}
