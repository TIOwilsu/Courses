import { IAmplifier } from "../interfaces/Amplifier";

export class Amplifier implements IAmplifier {
  public turnOn(): void {
    console.log("Amplifier is turned on");
  }

  public setVolume(level: number): void {
    console.log(`Volume is set to ${level}`);
  }
}
