import { IEmployee } from "./Employee";

export interface ICompositeEmployee {
  addEmployee(employee: IEmployee): void;
  removeEmployee(employee: IEmployee): void;
  getEmployees(): IEmployee[];
}
