import { IPaymentProcessor } from "../interfaces/PaymentProcessor";
import { IPaymentProcessorService } from "../interfaces/PaymentProcessorService";

export class PaymentProcessorService implements IPaymentProcessorService {
  executePayment(paymentProcessor: IPaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(amount);
  }
}
