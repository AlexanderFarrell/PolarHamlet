import {Noun} from "../../_Anava/Noun";

export class Spirit extends Noun {
    constructor(name) {
        super();
        this.Name = name;
        this.Body = null;
        this.Mind = null;
    }

    AttachBody(body) {
        this.Body = body;

        if (this.Mind !== null){
            this.Mind.Body = this.Body;
        }
    }

    DetachBody() {
        this.Body = null;
    }

    AttachMind(mind) {
        this.Mind = mind;

        if (this.Body !== null){
            this.Mind.Body = this.Body;
        }
    }

    DetachMind() {
        this.Mind = null;
    }
}