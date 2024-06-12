import { Factory } from "./models/Factory";

const factory = new Factory();

const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.operationB());
console.log(productB.combinedOperation(productA));
