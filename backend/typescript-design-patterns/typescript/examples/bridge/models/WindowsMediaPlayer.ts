import { IMediaPlayerImplementation } from "../interfaces/MediaPlayerImplementation";

export class WindowsMediaPlayer implements IMediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on Windows");
  }

  public playVideo(): void {
    console.log("Playing video on Windows");
  }
}
