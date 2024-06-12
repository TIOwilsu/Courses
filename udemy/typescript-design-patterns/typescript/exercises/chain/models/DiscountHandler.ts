import { AbstractHandler } from "./AbstractHandler";
import { Order } from "./Order";

export class DiscountHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    order.applyDiscount();
    return super.handle(order);
  }
}
