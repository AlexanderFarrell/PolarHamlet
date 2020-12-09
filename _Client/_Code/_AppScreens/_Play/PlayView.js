import {AppStateView} from "../../_Engine/_Screen/AppStateView";
import {GameBuilder} from "../../_Game/GameBuilder";

export class PlayView extends AppStateView{
    constructor() {
        super();
    }

    Load(error, callback) {
        callback();
    }
}