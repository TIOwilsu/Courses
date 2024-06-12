import { IServerRequest } from "../interfaces/ServerRequest";

export class BaseServer implements IServerRequest {
  public handle(request: any): void {
    console.log(`Handling request: ${request}`);
  }
}
