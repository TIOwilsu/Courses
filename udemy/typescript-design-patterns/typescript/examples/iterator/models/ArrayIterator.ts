import { IArrayIterator } from "../interfaces/ArrayIterator";

export class ArrayIterator<T> implements IArrayIterator<T> {
  private _collection: T[] = [];
  private _position: number = 0;

  constructor(collection: T[]) {
    this._collection = collection;
  }

  public ArrayIterator(collection: T[]): void {
    this._collection = collection;
  }

  public next(): T {
    this._position++;
    return this._collection[this._position];
  }

  public hasNext(): boolean {
    return this._position < this._collection.length;
  }
}
