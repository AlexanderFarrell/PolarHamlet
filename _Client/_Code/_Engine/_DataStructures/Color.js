export class Color {
    constructor() {
        this.Red = 0.0;
        this.Green = 0.0;
        this.Blue = 0.0;
        this.Alpha = 0.0;
    }

    static RGB(red, green, blue){
        let color = new Color();
        color.Red = red;
        color.Green = green;
        color.Blue = blue;
        return color;
    }

    static RGBA(red, green, blue, alpha){
        let color = this.RGB(red, green, blue);
        color.Alpha = alpha;
        return color;
    }

    static HSV(hue, sat, val){
        //Algorithm from https://en.wikipedia.org/wiki/HSL_and_HSV#Color_conversion_formulae
        let color = new Color();

        if (hue >= 1.0) {
            hue = 0.0;
        } else if (hue < 0.0) {
            hue = 0.0;
        }

        let hueProgression = hue * 6;
        let chroma = val * sat;
        let secondLargest = chroma * (1 - Math.abs((hueProgression % 2) - 1));

        let hueRegion = Math.floor(hueProgression);

        let red, green, blue = 0;

        if (hueProgression < 1){
            red = chroma;
            green = secondLargest;
        } else if (hueProgression < 2) {
            red = secondLargest;
            green = chroma;
        } else if (hueProgression < 3) {
            green = chroma;
            blue = secondLargest;
        } else if (hueProgression < 4) {
            green = secondLargest;
            blue = chroma;
        } else if (hueProgression < 5) {
            red = secondLargest;
            blue = chroma;
        } else if (hueProgression < 6) {
            red = chroma;
            blue = secondLargest;
        }

        let dullness = val - chroma;

        red += dullness;
        green += dullness;
        blue += dullness;

        return this.RGB(red, green, blue);
    }

    static HSVA(hue, sat, val, alpha){
        let color = this.HSV(hue, sat, val);
        color.Alpha = alpha;
        return color;
    }
}