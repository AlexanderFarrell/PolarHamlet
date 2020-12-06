export class UiContainer {
    constructor(containerElement) {
        this.containerElement = containerElement;
    }

    Load(){

    }

    Show() {
        this.containerElement.show();
    }

    Hide() {
        this.containerElement.hide();
    }

    Clear(){
        this.containerElement.remove();
    }
}