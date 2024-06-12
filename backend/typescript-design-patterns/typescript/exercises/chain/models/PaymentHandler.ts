import { AbstractHandler } from "./AbstractHandler";
import { Order } from "./Order";

export class PaymentHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    if (order.processPayment()) {
      return super.handle(order);
    }

    return "Payment failed";
  }
}
