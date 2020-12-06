export class IncompleteCodeError extends Error {
    constructor(featureOrMethod) {
        super("IncompleteCodeError: The feature or method " + featureOrMethod + " has not been coded yet.");
    }
}