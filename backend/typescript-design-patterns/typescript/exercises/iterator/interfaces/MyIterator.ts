import { IMyIteratorResult } from "./MyIteratorResult";

export interface IMyIterator<T> {
  next(): IMyIteratorResult<T>;
  hasNext(): boolean;
}
