import { PaymentProcessor } from "./PaymentProcessor";

export class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Debit Card Payments - Amount $${amount}`);
  }
}
