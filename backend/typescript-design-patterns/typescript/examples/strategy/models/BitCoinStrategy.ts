import { IPaymentStrategy } from "../interfaces/PaymentStrategy";

export class BitCoinStrategy implements IPaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using bitcoin`);
  }
}
