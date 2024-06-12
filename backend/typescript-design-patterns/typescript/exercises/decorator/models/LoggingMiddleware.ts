import { ServerRequestDecorator } from "./ServerRequestDecorator";

export class LoggingMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    console.log(`Logging Request: ${request}`);
    this.serverRequest.handle(request);
  }
}
