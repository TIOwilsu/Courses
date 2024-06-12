import { ICustomer } from "../interfaces/Customer";

export class RegularCustomer implements ICustomer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}
