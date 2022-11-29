import { FormatBuilderBase } from "./FormatBuilderBase";

export class JsonBuilder extends FormatBuilderBase {
    _result = "";
    
    constructor(root, properties) {
        super();
        this.delimiter = ',\n\t\t';
        this.root = root;
        this.properties = properties;
    }

    addHeader() {
        this._result += `{\n\t"${this.root}": {\t\n\t`;
    }

    addBody() {
        this._result += this.properties.map((property) => `"${property.key}": "${property.value}"`)
                                       .join(this.delimiter);
    }

    addFooter() {
        this._result += `\n\t}\n}`;
    }

    getResult() {
        return this._result;
    }
}