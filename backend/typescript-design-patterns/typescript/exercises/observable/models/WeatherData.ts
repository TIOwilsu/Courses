import { IObserver } from "../interfaces/Observer";
import { ISubject } from "../interfaces/subject";

export class WeatherData implements ISubject {
  private _observers: IObserver[] = [];
  private _temperature?: number;
  private _humidity?: number;
  private _pressure?: number;

  public registerObserver(observer: IObserver): void {
    const isExists = this._observers.includes(observer);

    if (isExists) {
      return console.log("Observer already exists");
    }

    this._observers.push(observer);
    console.log("Observer Added Successfully");
  }

  public removeObserver(observer: IObserver): void {
    const observerIndex = this._observers.indexOf(observer);

    if (observerIndex === -1) {
      return console.log("Observer Does not Exist");
    }

    this._observers.splice(observerIndex, 1);
    console.log("Observer was successfully removed");
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    console.log("Setting measurements ....");
    this.notifyObservers();
  }

  public notifyObservers(): void {
    if (
      this._temperature !== undefined &&
      this._humidity !== undefined &&
      this._pressure !== undefined
    ) {
      this._observers.forEach((observer) => {
        observer.update(this._temperature, this._humidity, this._pressure);
      });
    }
  }
}
