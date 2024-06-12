import { MediaPlayerAbstraction } from "./MediaPlayerAbstraction";

export class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}
