import { PaymentProcessorFactory } from "./models/PaymentProcessorFactory";

const paymentProcessorFactory = new PaymentProcessorFactory();

const paypalProcessor = paymentProcessorFactory.createProcessor("paypal", 200);
paypalProcessor.processPayment();

const stripeProcessor = paymentProcessorFactory.createProcessor("stripe", 300);
stripeProcessor.processPayment();

const bankTransferProcessor = paymentProcessorFactory.createProcessor(
  "bankTransfer",
  400
);
bankTransferProcessor.processPayment();
