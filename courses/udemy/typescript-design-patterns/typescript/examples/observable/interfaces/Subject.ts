import { IObserver } from "./Observer";

export interface ISubject {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}
