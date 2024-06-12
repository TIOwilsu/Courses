import { IPaymentStrategy } from "../interfaces/PaymentStrategy";

export class CreditCardStrategy implements IPaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}
