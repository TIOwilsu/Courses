import { IBank } from "../interfaces/Bank";

export class Bank implements IBank {
  private _balance: number;

  constructor(balance: number) {
    this._balance = balance;
  }

  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }

    this._balance += amount;
  }

  public widthDraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid widthdraw amount");
      return;
    }

    if (this._balance - amount < 0) {
      console.log("Insufficient funds");
      return;
    }

    this._balance -= amount;
  }
}
