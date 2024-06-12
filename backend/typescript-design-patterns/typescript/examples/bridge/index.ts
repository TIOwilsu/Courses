import { IMediaPlayerImplementation } from "./interfaces/MediaPlayerImplementation";
import { WindowsMediaPlayer } from "./models/WindowsMediaPlayer";
import { MacOSMediaPlayer } from "./models/MacOSMediaPlayer";
import { AudioPlayer } from "./models/AudioPlayer";
import { VideoPlayer } from "./models/VideoPlayer";

const play = (implementation: IMediaPlayerImplementation): void => {
  const audioPlayer = new AudioPlayer(implementation);
  const videoPlayer = new VideoPlayer(implementation);

  audioPlayer.playFile();
  videoPlayer.playFile();
};

play(new MacOSMediaPlayer());
play(new WindowsMediaPlayer());
