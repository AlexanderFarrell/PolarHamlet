import {UiContainer} from "../../../_Engine/_View/UiContainer";
import $ from "jquery";

export class MainButtons extends UiContainer {
    constructor() {
        super($('<div id="LoadGameScreen" class="StartScreen"></div>'));
    }
}