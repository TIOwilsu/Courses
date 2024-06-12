import { DataParser } from "./DataParser";

export class JSONParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as JSON");
    return data;
  }
}
