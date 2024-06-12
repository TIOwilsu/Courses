import { AuthMiddleware } from "./models/AuthMiddleware";
import { BaseServer } from "./models/BaseServer";
import { LoggingMiddleware } from "./models/LoggingMiddleware";

const request = {
  isAuthenticated: false,
  body: "Hello World",
};

let server = new BaseServer();
server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);

server.handle(request);
