import {Verb} from "../Verb";

export class VerbContinuous extends Verb {
    constructor(subject = null, target = null) {
        super(subject, target);
    }

    Do() {
        this.Begin();
    }

    Begin(){
        this.IsActive = true;
        this.OnBegin();
    }

    OnBegin(){

    }

    Update(){

    }

    End(){
        this.IsActive = false;
        this.OnEnd();
    }

    OnEnd(){

    }
}