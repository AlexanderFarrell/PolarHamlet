const stylesheetsToLoad = [
    {name: "", url: ""}
]

const scriptsToLoad = [
    {name: "Polar Hamlet", url: "javascripts/main.js", type: "module"}
]

function loadStylesheet(){

}

function load(){
    document.getElementById("LoadingTitle").innerText = "Initializing";

    try {
        scriptsToLoad.forEach((scriptOrder) => {
            document.getElementById("LoadingTitle").innerText = 'Loading ' + scriptOrder.name;
            loadScript(scriptOrder, () => {
                //$('#loadStart').hide();
            });
        });
    } catch (e) {
        document.getElementById("LoadingTitle").innerText = "An error occurred loading the game. We are sorry for the inconvenience";
    }

    //document.getElementById("LoadingTitle").innerText = "Starting Game";
}

function loadScript(scriptOrder, callback){
    try {
        const script = document.createElement('script');
        script.type = scriptOrder.type;
        script.src = scriptOrder.url;
        document.body.appendChild(script);
    } catch (e) {
        throw new Error("Could not load script");
    }

    callback();
}

