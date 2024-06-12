import { ICustomer } from "../interfaces/Customer";
import { IDiscount } from "../interfaces/Discount";

export class Discount implements IDiscount {
  giveDiscount(customer: ICustomer): number {
    return customer.giveDiscount();
  }
}
