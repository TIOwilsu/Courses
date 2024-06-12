import { IMediaPlayerImplementation } from "../interfaces/MediaPlayerImplementation";

export class MacOSMediaPlayer implements IMediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on MacOS");
  }

  public playVideo(): void {
    console.log("Playing video on MacOS");
  }
}
