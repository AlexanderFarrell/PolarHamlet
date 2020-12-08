in vec4 position;
in vec4 color;

out vec4 colorOut;

void main() {
    colorOut = color;
    gl_Position = position;
}