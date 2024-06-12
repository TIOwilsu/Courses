import { AbstractHandler } from "./AbstractHandler";
import { Order } from "./Order";

export class ValidationHandler extends AbstractHandler {
  public handle(order: Order): string | null {
    if (order.isValid()) {
      return super.handle(order);
    }

    return "Validation failed";
  }
}
