import {UiContainer} from "../../../_Engine/_View/UiContainer";

export class MainMenu extends UiContainer {

    Load() {
        let root = $('#root');

        this.background = $('<div id="MenuBackground"></div>');
        root.append(this.background);

        this.title = $('<div id="MenuTitle">Polar Hamlet</div>');
        this.background.append(this.title);
    }
}