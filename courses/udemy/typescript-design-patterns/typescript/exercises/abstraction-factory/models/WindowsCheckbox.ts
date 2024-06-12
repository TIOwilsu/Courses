import { IButton } from "../interfaces/Button";
import { ICheckbox } from "../interfaces/Checkbox";

export class WindowsCheckbox implements ICheckbox {
  private _button: IButton;

  constructor(button: IButton) {
    this._button = button;
  }

  render(): void {
    console.log("Render a checkbox in Windows Style");
  }

  toggle(): void {
    this._button.onClick(() => {
      console.log("Windows checkbox toggled");
    });
  }
}
