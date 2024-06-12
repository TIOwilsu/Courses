import { ICustomer } from "../interfaces/Customer";

export class GoldCustomer implements ICustomer {
  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
}
