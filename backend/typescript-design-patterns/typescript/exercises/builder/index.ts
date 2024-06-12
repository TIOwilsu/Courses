import { ICustomer } from "./interfaces/Customer";
import { ICustomerBuilder } from "./interfaces/CustomerBuilder";
import { ICustomerDirector } from "./interfaces/CustomerDirector";
import { CustomerBuilder } from "./models/CustomerBuilder";
import { CustomerDirector } from "./models/CustomerDirector";

const builder: ICustomerBuilder = new CustomerBuilder();
const director: ICustomerDirector = new CustomerDirector(builder);
const customer: ICustomer = director.buildMinimal(
  "Wilson",
  "Miranda",
  "wilson.miranda@example.com"
);

console.log(customer);
