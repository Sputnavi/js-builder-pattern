import { FormatDirector } from "./Builders/FormatDirector";
import { JsonBuilder } from "./Builders/JsonBuilder";
import { KeyValueItem } from "./models/KeyValueItem";

var jsonBuilder = new JsonBuilder("User", [new KeyValueItem("login", "Admin"), new KeyValueItem("password", "Qwerty123")]);
var jsonDirector = new FormatDirector(jsonBuilder);
var jsonResult = jsonDirector.serialize(jsonBuilder);
console.log(jsonResult);

var xmlBuilder = new XmlBuilder("User", [new KeyValueItem("login", "Admin"), new KeyValueItem("password", "Qwerty123")]);
var xmlDirector = new FormatDirector(xmlBuilder);
var xmlResult = xmlDirector.serialize(xmlBuilder);
console.log(xmlResult);