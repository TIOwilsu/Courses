import { IServerRequest } from "../interfaces/ServerRequest";

export abstract class ServerRequestDecorator implements IServerRequest {
  protected serverRequest: IServerRequest;

  constructor(serverRequest: IServerRequest) {
    this.serverRequest = serverRequest;
  }

  abstract handle(request: any): void;
}
