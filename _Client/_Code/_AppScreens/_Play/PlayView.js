import {AppStateView} from "../../_Engine/_Screen/AppStateView";
import {MainButtons} from "./_Views/MainButtons";

import $ from 'jquery'

export class PlayView extends AppStateView{
    constructor() {
        super();
    }

    Load(error, callback) {
        this.mainButtons = new MainButtons();
        this.mainButtons.Load();

        callback();
    }


    Render() {
        let root = $('#root');
        root.append(this.mainButtons.containerElement);
    }
}