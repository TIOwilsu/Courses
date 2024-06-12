import { Car } from "./Car";

export class Hatchback extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}
