import { DataParser } from "./DataParser";

export class XMLParser extends DataParser {
  protected parse(data: any): void {
    console.log("Parsing data as XML");
    return data;
  }
}
