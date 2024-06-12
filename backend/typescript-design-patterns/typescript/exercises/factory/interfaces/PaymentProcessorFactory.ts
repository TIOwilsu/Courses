import { IPaymentProcessor } from "./PaymentProcessor";

export interface IPaymentProcessorFactory {
  createProcessor(
    type: IPaymentProcessorFactoryType,
    amount: number
  ): IPaymentProcessor;
}

export type IPaymentProcessorFactoryType = "paypal" | "stripe" | "bankTransfer";
