import { PaymentProcessor } from "./PaymentProcessor";

export class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Credit Card Payments - Amount $${amount}`);
  }
}
