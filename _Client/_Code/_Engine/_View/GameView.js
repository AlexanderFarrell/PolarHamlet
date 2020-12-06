export class GameView {
    constructor(htmlString, name = null, parent = "root") {
        this.element = document.createElement('div');
        this.isAdded = false;

        if (name !== null){
            this.name = name;
            this.element.id = name;
        }
        this.parent = parent;
    }

    addToHtml(){
        document.getElementById(this.parent).appendChild(this.element);
        this.isAdded = true;
    }

    removeFromHtml(){
        this.element.remove();
        this.isAdded = false;
    }

    getHtmlString(){
        if (this.htmlString !== this.element.innerHTML)
            throw new Error("Html strings do not match on element " + this.name)

        return this.element.innerHTML;
    }

    setHtmlString(htmlString){
        this.htmlString = htmlString;
        this.element.innerHTML = htmlString;
    }

    show(){
        this.element.style.display = '';
    }

    hide(){
        this.element.style.display = 'none';
    }
}