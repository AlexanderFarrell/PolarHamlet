const stylesheetsToLoad = [
    {name: "", url: ""}
]

const scriptsToLoad = [
    {name: "Void Money", url: "javascripts/main.js", type: "module"}
]

function loadStylesheet(){

}

function load(){
    document.getElementById("LoadingTitle").innerText = "Initializing";

    scriptsToLoad.forEach((scriptOrder) => {
        document.getElementById("LoadingTitle").innerText = scriptOrder.name;
        loadScript(scriptOrder);
    });

    document.getElementById("LoadingTitle").innerText = "Starting Game";
}

function loadScript(scriptOrder, callback){
    const script = document.createElement('script');
    script.type = scriptOrder.type;
    script.src = scriptOrder.url;
    document.body.appendChild(script);
}

