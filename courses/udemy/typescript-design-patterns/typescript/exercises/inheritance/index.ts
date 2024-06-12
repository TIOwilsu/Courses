import { Book } from "./models/Book";
import { Electronic } from "./models/Electronic";

const book = new Book("1", 19.99, "A good book", "HJohn Doe", "John Does Book");
book.display();

const electronic = new Electronic(
  "2",
  2999,
  "This is a good Laptop",
  "Dell",
  "XPS 15"
);
electronic.display();
