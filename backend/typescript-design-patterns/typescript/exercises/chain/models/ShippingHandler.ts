import { AbstractHandler } from "./AbstractHandler";
import { Order } from "./Order";

export class ShippingHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    order.ship();
    return "Order processed and shipped";
  }
}
