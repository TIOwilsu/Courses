import { IHandler } from "../interfaces/Handler";

export abstract class AbstractHandler implements IHandler {
  private _nextHandler?: IHandler;

  public setNext(handler: IHandler): IHandler {
    this._nextHandler = handler;
    return this._nextHandler;
  }

  public handle(request: string): string | null {
    if (this._nextHandler) {
      return this._nextHandler.handle(request);
    }

    return null;
  }
}
