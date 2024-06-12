import { ShoppingCard } from "./models/ShoppingCard";
import { PayPalStrategy } from "./models/PayPalStrategy";
import { CreditCardStrategy } from "./models/CreditCardStrategy";
import { BitCoinStrategy } from "./models/BitCoinStrategy";

const shoppingCard = new ShoppingCard(new PayPalStrategy());
shoppingCard.addToCard(100);
shoppingCard.addToCard(50);
shoppingCard.checkout();

shoppingCard.setPaymentStrategy(new CreditCardStrategy());
shoppingCard.addToCard(500);
shoppingCard.checkout();

shoppingCard.setPaymentStrategy(new BitCoinStrategy());
shoppingCard.addToCard(1000);
shoppingCard.checkout();
