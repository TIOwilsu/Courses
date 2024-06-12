import { IDvdPlayer } from "../interfaces/DvdPlayer";
import { IProjector } from "../interfaces/Projector";

export class Projector implements IProjector {
  public turnOn(): void {
    console.log("Projector is turned on");
  }

  public setInput(dvdPlayer: IDvdPlayer): void {
    console.log("Input set to Dvd player");
  }
}
