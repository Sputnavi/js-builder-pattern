import { FormatBuilderBase } from "./FormatBuilderBase";

export class FormatDirector {
    constructor(formatBuilder) {
        if (!formatBuilder instanceof FormatBuilderBase) {
            throw Error("Object of class or child class of FormatBuilder should be provided in FormatDirector.");
        }

        this.formatBuilder = formatBuilder;
    }

    serialize() {
        this.formatBuilder.addHeader();
        this.formatBuilder.addBody();
        this.formatBuilder.addFooter();

        return this.formatBuilder.getResult();
    }
}