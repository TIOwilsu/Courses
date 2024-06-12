import { Order } from "../models/Order";

export interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(order: Order): string | null;
}
