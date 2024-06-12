import { ICompositeEmployee } from "../interfaces/CompositeEmployee";
import { IEmployee } from "../interfaces/Employee";

export class Manager implements ICompositeEmployee, IEmployee {
  private _name: string;
  private _salary: number;
  private _employees: IEmployee[] = [];

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
    return "Manager";
  }

  public addEmployee(employee: IEmployee): void {
    this._employees.push(employee);
  }

  public removeEmployee(employee: IEmployee): void {
    const index = this._employees.indexOf(employee);

    if (index !== -1) {
      this._employees.splice(index, 1);
    }
  }

  public getEmployees(): IEmployee[] {
    return this._employees;
  }
}
