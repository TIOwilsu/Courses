import { DataParser } from "./models/DataParser";
import { JSONParser } from "./models/JSONParser";
import { XMLParser } from "./models/XMLParser";

function dataParser(dataParser: DataParser) {
  dataParser.parserData();
}

console.log("Parsing JSON data");
dataParser(new JSONParser());

console.log("Parsing XML data");
dataParser(new XMLParser());
