export class FormatBuilderBase {
    constructor() {
        if (this.constructor == FormatBuilderBase) {
            throw new Error("Abstract classes can't be instantiated.");
          }
    }

    addHeader() {
        throw new Error("Method 'addHeader' should be implemented.");
    }

    addBody() {
        throw new Error("Method 'addBody' should be implemented.");
    }

    addFooter() {
        throw new Error("Method 'addFooter' should be implemented.");
    }

    getResult() {
        throw new Error("Method 'getResult' should be implemented.");
    }
}