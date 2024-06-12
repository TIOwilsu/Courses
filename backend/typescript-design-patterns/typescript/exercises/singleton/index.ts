import { Logger } from "./models/Logger";

const logger1 = Logger.getInstance();
logger1.log("This is the first message");

const logger2 = Logger.getInstance();
logger2.log("This is the second message");
