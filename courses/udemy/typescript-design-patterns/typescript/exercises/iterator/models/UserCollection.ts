import { ICollection } from "../interfaces/Collection";
import { IMyIterator } from "../interfaces/MyIterator";
import { User } from "./User";
import { UserIterator } from "./UserInterator";

export class UserCollection implements ICollection<User> {
  private _users: User[];

  constructor(users: User[]) {
    this._users = users;
  }

  public createIterator(): IMyIterator<User> {
    return new UserIterator(this);
  }

  public getItems(): User[] {
    return this._users;
  }
}
