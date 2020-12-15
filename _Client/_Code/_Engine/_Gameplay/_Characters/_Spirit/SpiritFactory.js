import {Spirit} from "./Spirit";

export class SpiritFactory {
    static InitWithBody(name, body){
        let spirit = new Spirit();
        spirit.AttachBody(body);
        return spirit;
    }

    static InitWithBodyAndMind(name, body, mind){
        let spirit = new Spirit();
        spirit.AttachBody(body);
        spirit.AttachMind(mind);
        return spirit;
    }
}