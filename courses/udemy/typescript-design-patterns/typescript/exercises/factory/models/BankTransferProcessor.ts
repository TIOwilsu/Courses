import { PaymentProcessor } from "./PaymentProcessor";

export class BankTransferProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(
      `This is Bank Transfer Processor and your amount is: ${this.amount}`
    );
  }
}
