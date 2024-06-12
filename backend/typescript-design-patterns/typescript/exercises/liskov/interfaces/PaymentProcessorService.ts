import { IPaymentProcessor } from "./PaymentProcessor";

export interface IPaymentProcessorService {
  executePayment(paymentProcessor: IPaymentProcessor, amount: number): void;
}
