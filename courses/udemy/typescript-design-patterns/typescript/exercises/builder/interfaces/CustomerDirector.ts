import { ICustomer } from "./Customer";

export interface ICustomerDirector {
  buildMinimal(firstName: string, lastName: string, email: string): ICustomer;
}
