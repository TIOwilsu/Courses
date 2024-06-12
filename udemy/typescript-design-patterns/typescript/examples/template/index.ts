import { CakeRecipe } from "./models/CakeRecipe";
import { ChocolateCake } from "./models/ChocolateCake";
import { VanillaCake } from "./models/VanillaCake";

function bakeCake(cake: CakeRecipe): void {
  cake.bakeCake();
}

console.log("Baking a chocolate cake");
bakeCake(new ChocolateCake());

console.log("Baking a vanilla cake");
bakeCake(new VanillaCake());
