import { IButton } from "../interfaces/Button";

export class WindowsButton implements IButton {
  render(): void {
    console.log("Render a button in Windows Style");
  }

  onClick(f: Function): void {
    console.log("Windows button was clicked");
    f();
  }
}
