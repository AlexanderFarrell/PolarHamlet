import {TimeHandler} from "./_Setting/TimeHandler";
import {LocationHandler} from "./_Setting/LocationHandler";
import {AmbianceHandler} from "./_Setting/AmbianceHandler";

export class Setting {
    constructor(name, description = null, time = null, location = null, ambiance = null) {
        this.Name = name;
        this.Description = description;

        this.Time = (time !== null) ? time : new TimeHandler();
        this.Location = (location !== null) ? location : new LocationHandler();
        this.Ambiance = (ambiance !== null) ? ambiance : new AmbianceHandler();

        this.Nouns = {};
        this.Verbs = {};
    }

    Update() {

    }

    AddNoun(noun, nameID) {
        this.Nouns[nameID] = noun;
    }

    RemoveNoun(noun, nameID) {
        let i = this.Nouns.indexOf(noun);
        if (i !== -1){
            this.Nouns.splice(i, 1);
        }
    }

    AddVerb(verb) {
        this.Verbs.push(verb);
    }

    RemoveVerb(verb) {
        let i = this.Verbs.indexOf(verb);
        if (i !== -1){
            this.Verbs.splice(i, 1);
        }
    }
}