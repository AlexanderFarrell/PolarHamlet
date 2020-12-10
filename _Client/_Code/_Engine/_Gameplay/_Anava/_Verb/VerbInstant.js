import {Verb} from "../Verb";

export class VerbInstant extends Verb {
    constructor(subject = null, target = null) {
        super(subject, target);
    }

    Do() {
        this.Execute();
    }

    Execute(){

    }
}