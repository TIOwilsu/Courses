import { ICar } from "../interfaces/Car";
import { ICarFactory, ICarFactoryType } from "../interfaces/CarFactory";
import { Car } from "./Car";
import { Hatchback } from "./Hatchback";
import { SUV } from "./SUV";
import { Sedan } from "./Sedan";

export class CarFactory implements ICarFactory {
  public createCar(
    type: ICarFactoryType,
    model: string,
    productionYear: number
  ): ICar {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car Type");
    }
  }
}
