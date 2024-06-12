import { IButton } from "../interfaces/Button";
import { ICheckbox } from "../interfaces/Checkbox";
import { IGUIFactory } from "../interfaces/GUIFactory";
import { WindowsButton } from "./WindowsButton";
import { WindowsCheckbox } from "./WindowsCheckbox";

export class WindowsFactory implements IGUIFactory {
  createButton(): IButton {
    return new WindowsButton();
  }

  createCheckbox(button: IButton): ICheckbox {
    return new WindowsCheckbox(button);
  }
}
