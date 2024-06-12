import { Car } from "./Car";

export class Sedan extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}
