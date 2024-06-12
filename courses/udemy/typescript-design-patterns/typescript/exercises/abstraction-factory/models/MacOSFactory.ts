import { IButton } from "../interfaces/Button";
import { ICheckbox } from "../interfaces/Checkbox";
import { IGUIFactory } from "../interfaces/GUIFactory";
import { MacOSCheckbox } from "./MacOSCheckbox";
import { MacOSButton } from "./MacOsButton";

export class MacOSFactory implements IGUIFactory {
  createButton(): IButton {
    return new MacOSButton();
  }

  createCheckbox(button: IButton): ICheckbox {
    return new MacOSCheckbox(button);
  }
}
