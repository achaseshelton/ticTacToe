// init

// We need these classesModel, View, Controller

// Model
// setState and maintain number of clicks
// tell the view to update
class Model {
    constructor(){
        this.counter;
    }
    init(){
        console.log("Model.init(");
        this.counter = 0;
    }
    setState(s){
        this.counter = s;
    }
}

// Controller
// capture the clicks the user makes
class Controller{
    constructor(){

    }
    init(){

    }
    handleClick(e){

    }
}
// View
// update the UI based on what is in the Model (state)
class View {
    constructor(){

    }
    init(){
        // setup the event listeners
    }
    updateUi(){

    }
}
// START
// init
function init () {
    console.log("init()");
    let m = new Model();
    m.init();
    let v = new View;
    v.init();
}

function runUnitTest1(){
    let m = new Model();
    m.init();
    m.setState(5);
    console.log(m.counter);
}
// caputre the user's activity
// update the view for the user


// END