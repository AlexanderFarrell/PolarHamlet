import {AppStateView} from "../../_Engine/_Screen/AppStateView";
import $ from "jquery";
import {EditorMenu} from "./_UI/EditorMenu";

export class EditorView extends AppStateView {
    constructor() {
        super();
    }

    Load(error, callback) {
        this.MainViews = new EditorMenu();
        this.MainViews.Load();

        callback();
    }

    Render() {
        super.Render();
        let root = $('#root');
        root.append(this.MainViews.containerElement);
    }
}