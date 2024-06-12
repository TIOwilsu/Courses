import { ICustomer } from "./Customer";

export interface IDiscount {
  giveDiscount(customer: ICustomer): number;
}
