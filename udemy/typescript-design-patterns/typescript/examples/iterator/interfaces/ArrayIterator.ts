export interface IArrayIterator<T> {
  ArrayIterator(collection: T[]): void;
  next(): T;
  hasNext(): boolean;
}
