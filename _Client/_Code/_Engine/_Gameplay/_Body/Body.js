import {EventPublisher} from "../../_DataStructures/EventPublisher";
import {Part} from "./Part";

export class Body {
    constructor() {
        this.OnAddEvent = new EventPublisher();
        this.OnRemoveEvent = new EventPublisher();
    }

    AddPart(name, part){
        if (part instanceof Part){
            this[name.toString()] = part;
            this.OnAddEvent.Broadcast(part);
            part.Begin();
        }
    }

    RemovePart(name){
        if (this.hasOwnProperty(name.toString())){
            if (this[name].hasOwnProperty('End')){
                this[name].End();
            }
            this.OnRemoveEvent.Broadcast(this[name.toString()]);
            delete this[name];
        }
    }
}