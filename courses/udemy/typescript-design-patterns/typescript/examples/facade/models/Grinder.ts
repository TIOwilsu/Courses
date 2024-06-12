import { IGrinder } from "../interfaces/Grinder";

export class Grinder implements IGrinder {
  public grindBeans(): void {
    console.log("Grinding beans...");
  }
}
