import { IObserver } from "../interfaces/Observer";
import { ISubject } from "../interfaces/Subject";

export class ConcreteObserver implements IObserver {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  update(subject: ISubject): void {
    console.log(
      `Observer ${this._id} updated, new state: ${subject.getState()}`
    );
  }
}
