import { IEmployee } from "../interfaces/Employee";

export class Developer implements IEmployee {
  private _name: string;
  private _salary: number;

  constructor(name: string, salary: number) {
    this._name = name;
    this._salary = salary;
  }

  public getName(): string {
    return this._name;
  }

  public getSalary(): number {
    return this._salary;
  }

  public getRole(): string {
    return "Developer";
  }
}
