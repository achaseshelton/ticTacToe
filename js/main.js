function init() {
    // instantiate and init the Model, View, and Controller

    // 1 - page loads, run init on the app
    let a = new App();

    a.init();

    console.log(a);

}

class Model {
    constructor() {
        this.controller = null;
        var player1 = null;
        var player2 = null;
        var boardArray = null;
        var turn = null;
        var marker = null;
        var tile = null;
        var value = null;        
    }

    init() {
        this.player1 = "X";
        this.player2 = "O";
        this.boardArray = [];
        this.turn = 0;
    }
    setController(c) {
        this.controller = c;
    }
    
    updateState() {
        this.tile = Event.target.id;
        if(this.turn % 2) {
            this.marker = this.player1;
            this.value = 1;
        } else {
            this.marker = this.player2;
            this.value = 2;
        }

    }

    updateArray(a, b) {

    }
}

// View class
class View {
    constructor() {
        this.m = null;
        let gameBoard = null;
    }

    setModel(model) {
        this.m = model;
    }
    init() {
        this.gameBoard = document.getElementById("board");
        this.gameBoard.innerHTML = "";
        this.generateBoard();
    }

    generateHTML({ type, classes, text = "", parent = null, id = "" }) {
        let element = document.createElement(type)
        element.className = classes
        element.innerText = text
        element.id = id;
        if (parent) {
            parent.appendChild(element)
        }
        return element
    }

    generateBoard() {
        console.log(9);
        let row = this.generateHTML({ type: "div", classes: "row", parent: this.gameBoard })
        for (let i = 0; i < 9; i++) {
            let element = this.generateHTML({ type: "div", classes: "col-4 border border-dark border-3 display-1 text-center", id: i, text: i, parent: row })
        }
    }

    updateView(a, b) {
        a.innerText = b;
    }
}

class Controller {
    constructor(model, view) {
        this.v = view;
        this.m = model;
        var boardDiv = document.getElementById("board");
    }

}

class App {
    constructor() {
        this.m = new Model();
        this.v = new View();
        this.v.setModel(this.m);
        this.c = new Controller(this.m, this.v);
        this.m.setController(this.c);
    }

    init() {
        console.log("starting the app");
        // this.c.init();
        this.v.init();
        // this.m.init();
    }
}