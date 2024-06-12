import { ConcreteObserver } from "./models/ConcreteObserver";
import { ConcreteSubject } from "./models/ConcreteSubject";

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver(1);
subject.addObserver(observer1);

const observer2 = new ConcreteObserver(2);
subject.addObserver(observer2);

subject.setState(123);
