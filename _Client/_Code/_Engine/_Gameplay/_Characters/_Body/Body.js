import {Noun} from "../../_Anava/Noun";
import {ComponentController} from "../../../_DataStructures/ComponentController";
import {Part} from "./Part";
import {ParameterError} from "../../../_Exceptions/ParameterError";

export class Body extends Noun {
    constructor() {
        super();
        this.ComponentController = new ComponentController(this);
    }

    Add(part){
        if (part instanceof Part){
            this.ComponentController.Add(part);
            part.Begin();
        } else {
            throw new ParameterError("Add Part", "part", "Part", part)
        }
    }

    Remove(part){
        if (part instanceof Part){
            this.ComponentController.Remove(part);
        }

        part.End();
    }

    End(){

    }

    /*constructor() {
        super();
        this.OnAddEvent = new EventPublisher();
        this.OnRemoveEvent = new EventPublisher();
        this.Parts = [];
        this.UpdatableParts = [];
    }

    Update(){
        this.UpdatableParts.forEach((part) => {
            part.Update();
        })
    }

    AddPart(part, name = null){
        if (part instanceof Part){
            if (name === null) name = part.constructor.name;
            this.Parts[name.toString()] = part;
            this[name.toString()] = part;
            part.Body = this;
            this.OnAddEvent.Broadcast(part);
            part.Begin();

            if (part.hasOwnProperty("Update")){
                this.UpdatableParts.push(part);
            }
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
            let iUpdatable = this.UpdatableParts.indexOf(this[name]);

            if (i !== -1){
                this.Parts.splice(i, 1);
            }

            if (iUpdatable !== -1){
                this.UpdatableParts.splice(i, 1);
            }

            delete this[name];
        }
    }

    End(){

    }*/
}