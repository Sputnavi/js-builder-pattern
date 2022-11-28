import { FormatBuilderBase } from "./FormatBuilderBase";

export class XmlBuilder extends FormatBuilderBase {
    _result = "";
    
    constructor(root, properties) {
        super();
        this.delimiter = '\n\t';
        this.root = root;
        this.properties = properties;
    }

    addHeader() {
        this._result += `<?xml version="1.0"?>\n<${this.root}>\n\t`;
    }

    addBody() {
        this._result += this.properties.map((property) => `<${property.key}>"${property.value}"</${property.key}>`)
                                       .join(this.delimiter);
    }

    addFooter() {
        this._result += `\n</${this.root}>`;
    }

    getResult() {
        return this._result;
    }
}