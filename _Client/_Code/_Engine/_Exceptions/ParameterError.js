export class ParameterError extends Error {
    constructor(methodName, parameterName, expectedType, passedValue) {
        super("ParameterError: Incorrect type passed to method. Method: " + methodName +
            ", Parameter Variable Name: " + parameterName + ", Expected Type: " + expectedType + ", Passed Type: " + typeof passedValue);
    }
}