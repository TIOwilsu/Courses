import { ICoffee } from "../interfaces/Coffee";

export class SimpleCoffee implements ICoffee {
  private _cost: number;
  private _description: string;

  constructor(cost: number, description: string) {
    this._cost = cost;
    this._description = description;
  }

  public cost(): number {
    return this._cost;
  }

  public description(): string {
    return this._description;
  }
}
