import { ServerRequestDecorator } from "./ServerRequestDecorator";

export class AuthMiddleware extends ServerRequestDecorator {
  public handle(request: any): void {
    if (request.isAuthenticated) {
      console.log(`Auth Request: ${request}`);
      this.serverRequest.handle(request);
      return;
    }

    console.log("UnAuthorised Access");
  }
}
