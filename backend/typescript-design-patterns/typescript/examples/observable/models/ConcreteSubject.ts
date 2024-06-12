import { IObserver } from "../interfaces/Observer";
import { ISubject } from "../interfaces/Subject";

export class ConcreteSubject implements ISubject {
  private _observers: IObserver[] = [];
  private _state: number = 0;

  public addObserver(observer: IObserver): void {
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

  public getState(): number {
    return this._state;
  }

  public setState(state: number): void {
    this._state = state;
    console.log("Setting State ....");
    this.notifyObservers();
  }

  public notifyObservers(): void {
    this._observers.forEach((observer) => {
      observer.update(this);
    });
  }
}
