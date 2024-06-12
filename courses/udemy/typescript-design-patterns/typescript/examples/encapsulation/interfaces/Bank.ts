export interface IBank {
  balance: number;
  deposit(amount: number): void;
  widthDraw(amount: number): void;
}
