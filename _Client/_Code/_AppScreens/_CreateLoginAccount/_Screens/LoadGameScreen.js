import {UiContainer} from "../../../_Engine/_View/UiContainer";

export class LoadGameScreen extends UiContainer{
    constructor() {
        super($('<div id="LoadGameScreen" class="StartScreen"></div>'));
    }

    Load() {
        this.resultLabel = $('<div id="LoadLabel" class="StartLabel"></div>');
        this.containerElement.append(this.resultLabel);

        this.loadIndicator = $('<div id="LoadIcon" style="top: 30vmin; width: 12vmin; height: 12vmin; left: calc(50% - 6vmin); position: absolute"> </div>');
        this.containerElement.append(this.loadIndicator)
    }
}