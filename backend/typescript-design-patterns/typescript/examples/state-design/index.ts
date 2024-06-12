import { LightSwitch } from "./models/LightSwitch";
import { OffState } from "./models/OffState";

const lightSwitch = new LightSwitch(new OffState());
lightSwitch.press();
lightSwitch.press();
