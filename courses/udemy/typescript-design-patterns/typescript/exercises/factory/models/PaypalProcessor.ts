import { PaymentProcessor } from "./PaymentProcessor";

export class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`This is PayPal Processor and your amount is: ${this.amount}`);
  }
}
