import { Light } from "./models/Light";
import { SimpleRemoteControl } from "./models/SimpleRemoteControl";
import { TurnOffCommand } from "./models/TurnOffCommand";
import { TurnOnCommand } from "./models/TurnOnCommand";

const remote = new SimpleRemoteControl();
const light = new Light();

remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();

remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();

remote.undoButtonWasPressed();

remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOnCommand(light));

while (remote.hasCommand()) {
  remote.buttonWasPressed();
}
