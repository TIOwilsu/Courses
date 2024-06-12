import { IPaymentProcessor } from "../interfaces/PaymentProcessor";
import {
  IPaymentProcessorFactory,
  IPaymentProcessorFactoryType,
} from "../interfaces/PaymentProcessorFactory";
import { BankTransferProcessor } from "./BankTransferProcessor";
import { PaypalProcessor } from "./PaypalProcessor";
import { StripeProcessor } from "./StripeProcessor";

export class PaymentProcessorFactory implements IPaymentProcessorFactory {
  public createProcessor(
    type: IPaymentProcessorFactoryType,
    amount: number
  ): IPaymentProcessor {
    switch (type) {
      case "paypal":
        return new PaypalProcessor(amount);
      case "stripe":
        return new StripeProcessor(amount);
      case "bankTransfer":
        return new BankTransferProcessor(amount);
      default:
        throw new Error("Invalid car Type");
    }
  }
}
