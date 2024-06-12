import { IHandler } from "./interfaces/Handler";
import { DogHandler } from "./models/DogHandler";
import { MonkeyHandler } from "./models/MonkeyHandler";
import { SquirrelHandler } from "./models/SquirrelHandler";

function clientCode(handler: IHandler) {
  const foods = ["Nut", "Banana", "Cup Of Coffee", "MeatBall"];

  for (const food of foods) {
    console.log(`Who wants to eat ${food}`);
    const result = handler.handle(food);

    if (result) {
      console.log(result);
    } else {
      console.log(`${food} was left untouched`);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

clientCode(monkey);
