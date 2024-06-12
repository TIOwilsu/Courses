import { PaymentProcessorService } from "./services/PaymentProcessorService";
import { CreditCardProcessor } from "./models/CreditCardProcessor";
import { DebitCardProcessor } from "./models/DebitCardProcessor";
import { PaypalProcessor } from "./models/PaypalProcessor";
import { BitCoinProcessor } from "./models/BitcoinProcessor";

const creditCardProcessor = new CreditCardProcessor();
const debitCardProcessor = new DebitCardProcessor();
const paypalProcessor = new PaypalProcessor();
const bitCoinProcessor = new BitCoinProcessor();
const paymentProcessorService = new PaymentProcessorService();

paymentProcessorService.executePayment(creditCardProcessor, 100);
paymentProcessorService.executePayment(debitCardProcessor, 50);
paymentProcessorService.executePayment(paypalProcessor, 150);
paymentProcessorService.executePayment(bitCoinProcessor, 200);
