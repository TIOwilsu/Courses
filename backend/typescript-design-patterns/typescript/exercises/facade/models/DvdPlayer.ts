import { IDvdPlayer } from "../interfaces/DvdPlayer";

export class DvdPlayer implements IDvdPlayer {
  public turnOn(): void {
    console.log("The Dvd player is turned on");
  }

  public play(movie: string): void {
    console.log(`Playing ${movie}`);
  }
}
