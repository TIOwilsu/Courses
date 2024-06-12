import { IDvdPlayer } from "./DvdPlayer";

export interface IProjector {
  turnOn(): void;
  setInput(dvdPlayer: IDvdPlayer): void;
}
