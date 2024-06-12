import { IButton } from "../interfaces/Button";

export class MacOSButton implements IButton {
  render(): void {
    console.log("Render a button in MacOS Style");
  }

  onClick(f: Function): void {
    console.log("MacOS button was clicked");
    f();
  }
}
