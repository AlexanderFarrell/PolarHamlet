export class Dictionary {
    constructor() {
        this.Nouns = [];
        this.Verbs = [];
    }

    AddNoun(noun){
        this.Nouns[noun.name] = noun; //Eh
    }

    AddVerb(verb, present, past, future, progressive){

    }
}