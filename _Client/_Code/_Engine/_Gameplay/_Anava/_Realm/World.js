export class World {
    constructor() {
        this.Settings = [];
        this.ActiveSetting = null;
    }

    Load(){

    }

    Init(settings, activeSetting){
        this.Settings.push(settings);
        this.ActiveSetting = activeSetting;
    }

    Start(){

    }

    End(){

    }
}