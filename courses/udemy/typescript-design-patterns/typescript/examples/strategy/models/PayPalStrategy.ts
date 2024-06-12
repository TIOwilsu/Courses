import { IPaymentStrategy } from "../interfaces/PaymentStrategy";

export class PayPalStrategy implements IPaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using paypal`);
  }
}
