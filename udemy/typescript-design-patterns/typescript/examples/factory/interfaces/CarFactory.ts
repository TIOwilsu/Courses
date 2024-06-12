import { ICar } from "./Car";

export interface ICarFactory {
  createCar(type: ICarFactoryType, model: string, productionYear: number): ICar;
}

export type ICarFactoryType = "sedan" | "suv" | "hatchback";
