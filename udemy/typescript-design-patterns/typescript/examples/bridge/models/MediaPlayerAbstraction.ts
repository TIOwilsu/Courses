import { IMediaPlayerAbstraction } from "../interfaces/MediaPlayerAbstraction";
import { IMediaPlayerImplementation } from "../interfaces/MediaPlayerImplementation";

export abstract class MediaPlayerAbstraction
  implements IMediaPlayerAbstraction
{
  protected implementation: IMediaPlayerImplementation;

  constructor(implementation: IMediaPlayerImplementation) {
    this.implementation = implementation;
  }

  public abstract playFile(): void;
}
