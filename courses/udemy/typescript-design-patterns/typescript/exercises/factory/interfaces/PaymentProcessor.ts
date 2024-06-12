export interface IPaymentProcessor {
  amount: number;
  processPayment(): void;
}
