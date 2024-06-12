import { IPaymentStrategy } from "../interfaces/PaymentStrategy";

export class ShoppingCard {
  private _amount: number = 0;
  private _strategy: IPaymentStrategy;

  constructor(strategy: IPaymentStrategy) {
    this._strategy = strategy;
  }

  public setPaymentStrategy(strategy: IPaymentStrategy): void {
    this._strategy = strategy;
  }

  public addToCard(value: number): void {
    this._amount += value;
  }

  public checkout(): void {
    this._strategy.pay(this._amount);
  }
}
