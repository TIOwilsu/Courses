import { IPaymentProcessor } from "../interfaces/PaymentProcessor";

export abstract class PaymentProcessor implements IPaymentProcessor {
  abstract processPayment(amount: number): void;
}
