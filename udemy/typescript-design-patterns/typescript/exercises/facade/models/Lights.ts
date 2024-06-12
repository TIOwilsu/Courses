import { ILights } from "../interfaces/Lights";

export class Lights implements ILights {
  public dim(level: number): void {
    console.log(`Lights dimmed to ${level}`);
  }
}
