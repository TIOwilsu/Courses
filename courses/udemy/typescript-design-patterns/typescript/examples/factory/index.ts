import { CarFactory } from "./models/CarFactory";

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Camry", 2023);
sedan.displayCarInfo();

const suv = carFactory.createCar("suv", "RAV4", 2023);
suv.displayCarInfo();

const hatchback = carFactory.createCar("hatchback", "Corolla", 2023);
hatchback.displayCarInfo();
