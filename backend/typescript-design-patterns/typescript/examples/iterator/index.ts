import { ArrayIterator } from "./models/ArrayIterator";

const people = ["Du", "Dudu", "Edu"];
const arrayIterator = new ArrayIterator<string>(people);

people.forEach(() => {
  console.log(arrayIterator.next());
  console.log(arrayIterator.hasNext());
});
