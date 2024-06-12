import { IAmplifier } from "../interfaces/Amplifier";
import { IDvdPlayer } from "../interfaces/DvdPlayer";
import { IHomeTheaterFacade } from "../interfaces/HomeTheaterFacade";
import { ILights } from "../interfaces/Lights";
import { IProjector } from "../interfaces/Projector";

export class HomeTheaterFacade implements IHomeTheaterFacade {
  private _amplifier: IAmplifier;
  private _dvdPlayer: IDvdPlayer;
  private _projector: IProjector;
  private _lights: ILights;

  constructor(
    amplifier: IAmplifier,
    dvdPlayer: IDvdPlayer,
    projector: IProjector,
    lights: ILights
  ) {
    this._amplifier = amplifier;
    this._dvdPlayer = dvdPlayer;
    this._projector = projector;
    this._lights = lights;
  }

  public watchMovie(movie: string, volume: number, level: number): void {
    console.log(`Get ready to watch ${movie}`);
    this._lights.dim(level);
    this._amplifier.turnOn();
    this._amplifier.setVolume(volume);
    this._dvdPlayer.turnOn();
    this._projector.turnOn();
    this._projector.setInput(this._dvdPlayer);
    this._dvdPlayer.play(movie);
  }
}
