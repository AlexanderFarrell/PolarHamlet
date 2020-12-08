class GraphicsError extends Error {
    constructor(message) {
        super("GRAPHICS ERROR: " + message);
    }
}