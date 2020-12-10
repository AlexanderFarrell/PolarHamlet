import {Part} from "../Part";
import {EventPublisher} from "../../../../_DataStructures/EventPublisher";

export class UpdateHandler extends Part {
    constructor(body, methodName) {
        super(body);
        this.Publisher = new EventPublisher();
    }

    Begin() {
        this.Interval = setInterval(this.Update, 1000.0/60.0);
    }

    onAdd(part){
        if ((part.hasOwnProperty("Update")) && (typeof part.Update === 'function')){
            this.Publisher.AddSubscribedFunction(part.Update);
        }
    }

    onRemove(part){
        this.Publisher.RemoveSubscribedFunction(part.Update);
    }

    Update(){
        this.Publisher.Broadcast();
    }

    End() {
        clearInterval(this.Interval);
    }
}