import { ILogger } from "../interfaces/Logger";

export class Logger implements ILogger {
  private static _instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger._instance) {
      Logger._instance = new Logger();
    }

    return Logger._instance;
  }

  public log(message: string): void {
    const timestamp = new Date();
    console.log(`[ ${timestamp.toLocaleDateString()}] - ${message}`);
  }
}
