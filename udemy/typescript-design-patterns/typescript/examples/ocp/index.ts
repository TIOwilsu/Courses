import { Discount } from "./models/Discount";
import { GoldCustomer } from "./models/GoldCustomer";
import { PremiumCustomer } from "./models/PremiumCustomer";

const premiumCustomer: PremiumCustomer = new PremiumCustomer();
const goldCustomer: GoldCustomer = new GoldCustomer();
const discount = new Discount();

const finalValue = discount.giveDiscount(goldCustomer);

console.log(finalValue);
