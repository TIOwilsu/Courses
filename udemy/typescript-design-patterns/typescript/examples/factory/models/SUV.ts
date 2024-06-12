import { Car } from "./Car";

export class SUV extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}
