import {EventPublisher} from "./EventPublisher";

export class ComponentController {
    constructor(entity) {
        this.Entity = entity;
        this.Components = {};
        this.OnAdd = new EventPublisher();
        this.OnRemove = new EventPublisher();
        this.OnClear = new EventPublisher();
    }

    Add(component){
        this.Entity[component.constructor.name] = component;
        this.Components[component.constructor.name] = component;

        component[this.Entity.constructor.name] = this.Entity;

        this.OnAdd.Broadcast(component);
    }

    Remove(component){
        this.OnRemove.Broadcast(component);


        if (this.Entity.hasOwnProperty(component.constructor.name)){
            delete this.Entity[component.constructor.name];
        }

        if (component.hasOwnProperty(this.Entity.constructor.name)){
            delete component[this.Entity.constructor.name];
        }

        //Test
        if (this.Components.hasOwnProperty(component.constructor.name)){
            delete this.Components[component.constructor.name];
        }
    }

    Clear(){
        this.OnClear.Broadcast(this.Entity);

        for (const component in this.Components){
            this.Remove(this.Components[component]);
        }
    }
}