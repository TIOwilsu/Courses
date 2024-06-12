import { PaymentProcessor } from "./PaymentProcessor";

export class BitCoinProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing Bitcoin Payments - Amount $${amount}`);
  }
}
