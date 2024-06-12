import { Bank } from "./models/Bank";

const myAccount = new Bank(1000);
myAccount.deposit(500);
myAccount.widthDraw(200);
console.log(`Current balance: ${myAccount.balance}`);
