// INIT
// Create an instance of my Model
// Setup the storage of the number of clicks
// create a controller to capture the button clicks
// click handler to tell the model to update state
// create an instance of the View
// tell the view to show the ui

class Model {
    constructor() {
        // state?
        this.counter = 0;
    }
    init() {
        console.log("Model.init()");
        this.counter = 0;
    }
    updateView() {
        // change my counter text when update
        var counterText = document.getElementById("counter_txt");
        counterText.innerHTML = this.counter.toString();
    }
    addClick() {
        var s = this.counter;
        this.setState(+1);
    }
    suctractClick() {
        var s = this.counter;
        this.setState(-1);
    }
    setState(s) {
        this.counter = s;
    }
}

function init() {
    let m = new Model();
    
}