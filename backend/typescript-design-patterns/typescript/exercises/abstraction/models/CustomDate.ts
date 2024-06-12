import { ICustomDate } from "../interfaces/CustomDate";

export class CustomDate implements ICustomDate {
  private _date: Date;

  constructor() {
    this._date = new Date();
  }

  public getCurrentDate(): number {
    return this._date.getDate();
  }

  public getCurrentMonth(): number {
    return this._date.getMonth() + 1;
  }

  public getCurrentYear(): number {
    return this._date.getFullYear();
  }
}
