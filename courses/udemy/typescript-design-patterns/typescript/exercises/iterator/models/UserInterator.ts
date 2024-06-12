import { IMyIterator } from "../interfaces/MyIterator";
import { IMyIteratorResult } from "../interfaces/MyIteratorResult";
import { User } from "./User";
import { UserCollection } from "./UserCollection";

export class UserIterator<T> implements IMyIterator<User> {
  private _collection: UserCollection;
  private _position: number = 0;

  constructor(collection: UserCollection) {
    this._collection = collection;
  }

  public next(): IMyIteratorResult<User> {
    if (this.hasNext()) {
      this._position++;
      const item = this._collection.getItems()[this._position];
      return { value: item, done: false };
    }

    return { value: null, done: true };
  }

  public hasNext(): boolean {
    return this._position < this._collection.getItems().length;
  }
}
