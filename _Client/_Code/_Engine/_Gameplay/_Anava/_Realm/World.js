export class World {
    constructor() {
        this.Settings = [];
        this.ActiveSetting = null;
    }

    Load(){

    }

    Update(){
        this.ActiveSetting?.Update();
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