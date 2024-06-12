import { CakeRecipe } from "./CakeRecipe";

export class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: vanilla extract, sugar, butter, flour, eggs");
  }
}
