import { Amplifier } from "./models/Amplifier";
import { DvdPlayer } from "./models/DvdPlayer";
import { HomeTheaterFacade } from "./models/HomeTheaterFacade";
import { Lights } from "./models/Lights";
import { Projector } from "./models/Projector";

const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const lights = new Lights();

const homeTheaterFacade = new HomeTheaterFacade(
  amplifier,
  dvdPlayer,
  projector,
  lights
);
homeTheaterFacade.watchMovie("Duna", 50, 0);
