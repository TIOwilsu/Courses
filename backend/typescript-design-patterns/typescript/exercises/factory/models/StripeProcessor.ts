import { PaymentProcessor } from "./PaymentProcessor";

export class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`This is Stripe Processor and your amount is: ${this.amount}`);
  }
}
