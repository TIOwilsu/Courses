import { PaymentProcessor } from "./PaymentProcessor";

export class PaypalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Paypal Payments - Amount $${amount}`);
  }
}
