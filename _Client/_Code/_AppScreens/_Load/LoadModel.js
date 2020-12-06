import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";

export class LoadModel extends AppStateModel{
    constructor(appState) {
        super();
        this.AppStateToLoad = appState;
    }
}