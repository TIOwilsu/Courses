import { IMyIterator } from "./MyIterator";

export interface ICollection<T> {
  createIterator(): IMyIterator<T>;
}
