
import {Part} from "./Part";
import {EventPublisher} from "../../../_DataStructures/EventPublisher";

export class Body extends Noun {
    constructor() {
        super();
        this.OnAddEvent = new EventPublisher();
        this.OnRemoveEvent = new EventPublisher();
        this.Parts = [];
    }

    AddPart(part, name = null){
        if (part instanceof Part){
            if (name === null) name = part.constructor.name;
            this.Parts[name.toString()] = part;
            this[name.toString()] = part;
            part.Body = this;
            this.OnAddEvent.Broadcast(part);
            part.Begin();
        }

        return part;
    }

    RemovePart(name){
        if (this.hasOwnProperty(name.toString())){
            if (this[name].hasOwnProperty('End')){
                this[name].End();
            }
            this.OnRemoveEvent.Broadcast(this[name.toString()]);

            let i = this.Parts.indexOf(this[name]);

            if (i !== -1){
                this.Parts.splice(i, 1);
            }

            delete this[name];
        }
    }

    End(){

    }
}