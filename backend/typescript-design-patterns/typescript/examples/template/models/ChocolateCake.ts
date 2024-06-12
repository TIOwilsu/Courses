import { CakeRecipe } from "./CakeRecipe";

export class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, butter, flour and eggs");
  }

  protected decorate(): void {
    console.log("Decorating cake with chocolate");
  }
}
