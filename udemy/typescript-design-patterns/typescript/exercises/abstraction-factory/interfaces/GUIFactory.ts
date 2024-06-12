import { IButton } from "./Button";
import { ICheckbox } from "./Checkbox";

export interface IGUIFactory {
  createButton(): IButton;
  createCheckbox(button: IButton): ICheckbox;
}
