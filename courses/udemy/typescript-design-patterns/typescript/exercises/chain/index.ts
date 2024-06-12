import { DiscountHandler } from "./models/DiscountHandler";
import { Order } from "./models/Order";
import { PaymentHandler } from "./models/PaymentHandler";
import { ShippingHandler } from "./models/ShippingHandler";
import { ValidationHandler } from "./models/ValidationHandler";

const order = new Order();
const orderHandler = new ValidationHandler();

orderHandler
  .setNext(new DiscountHandler())
  .setNext(new PaymentHandler())
  .setNext(new ShippingHandler());

console.log(orderHandler.handle(order));
