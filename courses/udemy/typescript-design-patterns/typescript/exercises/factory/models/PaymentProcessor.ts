import { IPaymentProcessor } from "../interfaces/PaymentProcessor";

export abstract class PaymentProcessor implements IPaymentProcessor {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public abstract processPayment(): void;
}
