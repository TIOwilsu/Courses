import { IBook } from "../interfaces/Book";
import { Product } from "./Product";

export class Book extends Product implements IBook {
  public author: string;
  public title: string;

  constructor(
    id: string,
    price: number,
    description: string,
    author: string,
    title: string
  ) {
    super(id, price, description);
    this.author = author;
    this.title = title;
  }

  public display(): void {
    super.display();
    console.log(`Author: ${this.author}, Title: ${this.title}`);
  }
}
