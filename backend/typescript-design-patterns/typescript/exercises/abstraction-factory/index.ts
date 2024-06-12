import { IGUIFactory } from "./interfaces/GUIFactory";
import { MacOSFactory } from "./models/MacOSFactory";
import { WindowsFactory } from "./models/WindowsFactory";

function renderUI(factory: IGUIFactory): void {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => {
    console.log("Button clicked");
  });
  checkbox.toggle();
}

const windowsFactory = new WindowsFactory();
renderUI(windowsFactory);

const macOSFactory = new MacOSFactory();
renderUI(macOSFactory);
