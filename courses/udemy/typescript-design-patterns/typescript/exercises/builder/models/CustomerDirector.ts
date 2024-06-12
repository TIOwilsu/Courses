import { ICustomer } from "../interfaces/Customer";
import { ICustomerBuilder } from "../interfaces/CustomerBuilder";
import { ICustomerDirector } from "../interfaces/CustomerDirector";

export class CustomerDirector implements ICustomerDirector {
  private _builder: ICustomerBuilder;

  constructor(builder: ICustomerBuilder) {
    this._builder = builder;
  }

  public buildMinimal(
    firstName: string,
    lastName: string,
    email: string
  ): ICustomer {
    this._builder.setFirstName(firstName);
    this._builder.setLastName(lastName);
    this._builder.setEmail(email);

    return this._builder.build();
  }
}
