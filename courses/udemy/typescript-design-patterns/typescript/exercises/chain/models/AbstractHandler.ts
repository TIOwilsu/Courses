import { IHandler } from "../interfaces/Handler";
import { Order } from "./Order";

export class AbstractHandler implements IHandler {
  private _nextHandler: IHandler | null;

  public setNext(handler: IHandler): IHandler {
    this._nextHandler = handler;
    return this._nextHandler;
  }

  public handle(order: Order): string | null {
    if (this._nextHandler) {
      return this._nextHandler.handle(order);
    }

    return null;
  }
}
