import { ICustomer } from "../interfaces/Customer";

export class PremiumCustomer implements ICustomer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
}
