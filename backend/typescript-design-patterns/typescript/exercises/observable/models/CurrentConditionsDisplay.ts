import { IObserver } from "../interfaces/Observer";
import { ISubject } from "../interfaces/subject";

export class CurrentConditionsDisplay implements IObserver {
  private _temperature?: number;
  private _humidity?: number;
  private _pressure?: number;

  constructor(private _weatherData: ISubject) {
    this._weatherData.registerObserver(this);
  }

  public update(
    temperature?: number,
    humidity?: number,
    pressure?: number
  ): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.display();
  }

  public display(): void {
    if (
      this._temperature !== undefined &&
      this._humidity !== undefined &&
      this._pressure !== undefined
    ) {
      console.log(
        `Temperature: ${this._temperature}, Humidity: ${this._humidity}, Pressure ${this._pressure}`
      );
    } else {
      console.log("Weather data is not available");
    }
  }
}
