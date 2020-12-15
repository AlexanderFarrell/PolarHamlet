import {ComponentController} from "../../../_DataStructures/ComponentController";
import {Department} from "./Department";

export class Mind {
    constructor(body) {
        this.ComponentController = new ComponentController(this);
        this.Body = body;
    }

    Add(department){
        if (department instanceof Department){
            this.ComponentController.Add(department);
            department.Begin();
        }
    }

    Remove(department){
        if (department instanceof Department){
            this.ComponentController.Remove(department);
        }
    }
}