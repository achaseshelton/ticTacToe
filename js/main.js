var a;
function init() {
    // instantiate and init the Model, View, and Controller

    // 1 - page loads, run init on the app
    a = new App();

    a.init();

    console.log(a);

}

class App {
    constructor() {
        // App - Model
        this.player1 = "X";
        this.player2 = "O";
        this.turn = 0;
        this.gameBoard = document.getElementById("board");
        this.gameBoard.innerText = "";
        this.boardArray = [];
        this.announcement = document.getElementById("announcement");
        this.announcement.innerText = "";
        this.gameStatus = "on";
        this.whoseTurn = document.getElementById("turn");
        this.whoseTurn.innerText = "Player 1's Turn";
    }

    init() {
        // console.log("starting the app");
        this.generateBoard()
    }

// App - Controller

    gameOver() {
        this.solutions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < this.solutions.length; i++) {
            let total = 0;
            for (let j = 0; j < this.solutions[i].length; j++) {

                // console.log({ i, j, currentSolutionIndexValue: this.solutions[i][j] })
                total += this.boardArray[this.solutions[i][j]].value;
                if (total === 3) {
                    this.announcement.innerText = "Player 1 Wins"
                    this.gameStatus = "off";
                    this.whoseTurn.innerText = "";
                }
                if (total === 15) {
                    this.announcement.innerText = "Player 2 Wins"
                    this.gameStatus = "off";
                    this.whoseTurn.innerText = "";
                }
            }
            total = 0;
        }
        if (this.turn === 9 && this.gameStatus == "on") {
            this.announcement.innerText = "This game is a draw";
            this.whoseTurn.innerText = "";
        }
    }
    updateState(i, event) {
        // this.tile = Event.target.id;
        // console.log(this);
        // console.log(event)
        // console.log(typeof i);
        // console.log(this.boardArray);
        if (!this.boardArray[i].clicked && this.gameStatus == "on") {
            if (this.turn % 2 == 0) {
                this.boardArray[i].placement.innerText = this.player1;
                this.boardArray[i].value = 1;
                // console.log(this.boardArray);
            } else {
                this.boardArray[i].placement.innerText = this.player2;
                this.boardArray[i].value = 5;
            }
            this.boardArray[i].clicked = true;
            this.turn++;
            if(this.turn % 2 == 0) {
                this.whoseTurn.innerText = "Player 1's Turn";
            } else {
                this.whoseTurn.innerText = "Player 2's Turn";
            };
            console.log(this.turn);
        }
        if (this.turn >= 5) {
            this.gameOver()
        }
    }

    // App View

    generateHTML({ type, types, classes, text = "", parent = null, id = "", onclick = "" }) {
        let element = document.createElement(type)
        element.className = classes
        element.type = types
        element.innerText = text
        element.id = id;
        element.onclick = onclick;
        if (parent) {
            parent.appendChild(element)
        }

        return element
    }

    generateBoard() {
        // console.log(9);
        let row = this.generateHTML({ type: "div", classes: "row", parent: this.gameBoard })
        for (let i = 0; i < 9; i++) {
            let col = this.generateHTML({ type: "div", classes: "col-4 display-4 text-center p-2 p-e-2", id: i, parent: row })
            let button = this.generateHTML({ type: "button", types: "button", classes: "btn-tile btn-primary h-100 w-100", onclick: this.updateState.bind(this, i), parent: col })
            let tile = new Tile(button, i);
            this.boardArray.push(tile);
        }
    }
}

// Tile should create the tiles on the board, store the data for if a tile has been clicked, a value based on who clicked. Only has model.

class Tile {
    constructor(place, i) {
        this.clicked = false;
        this.value = 0;
        this.placement = place;
        this.index = i;
    }
}