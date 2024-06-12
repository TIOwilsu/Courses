import { ConcreteBuilder } from "./models/ConcreteBuilder";
import { Director } from "./models/Director";

const builder = new ConcreteBuilder();
const director = new Director();

director.setBuilder(builder);

director.buildMinimalViableProduct();
const minProduct = builder.getProduct();
console.log(minProduct);

director.buildFullFeatureProduct();
const fullProduct = builder.getProduct();
console.log(fullProduct);
