import {UiContainer} from "../../../_Engine/_View/UiContainer";

export class LoginDisplay extends UiContainer {
    constructor() {
        super($('<span id="LoginDisplay">Logged in as </span>'));
    }
}