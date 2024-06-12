import { User } from "./models/User";
import { UserCollection } from "./models/UserCollection";

const users = [
  new User("Naruto"),
  new User("Sasuke"),
  new User("Kakashi"),
  new User("Sakura"),
];
const collection = new UserCollection(users);

const iterator = collection.createIterator();

users.forEach(() => {
  console.log(iterator.next());
  console.log(iterator.hasNext());
});
