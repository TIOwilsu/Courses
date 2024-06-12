import { MediaPlayerAbstraction } from "./MediaPlayerAbstraction";

export class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}
