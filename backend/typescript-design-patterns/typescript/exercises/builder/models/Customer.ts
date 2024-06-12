import { ICustomer } from "../interfaces/Customer";

export class Customer implements ICustomer {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
