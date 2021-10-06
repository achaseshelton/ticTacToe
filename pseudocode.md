# Tic Tac Toe Pseudocode

User wants to have a replayable Tic Tac Toe game.

### Requirements
1. Dynamically render the html in js.
2. Code should use at least one Class.
3. Project must be object oriented. and use either a MVC or composite method.
4. Game should let the players know whose turn it is.
5. Tiles should only be clickable once and not clickable when the game is over.
6. Game should display who the winner is.
7. Have a restart game button.

### Data Structures and Functions

#### Objects/Classes

###### App
1. Model
    - Stores the current State.
    - Contains the complex logic.
    - Holds the win conditions.
    - Current placement of X's O's. (Array of objects)
    - Stores the variable of players.
    - Contains the functions for what to do onClick.

2. View
    - Creates the board.
    - Updates the board based on what is given by the controller.
    - Shows the players the current state of the game board.
    - Shows the players whose turn it is.
    - Shows the players if there is a winner or if there is a tie.

3. Controller
    - When a tile is placed tells the model to update the state.
    - Determines if there is a winner or tie.
    - Handles the onClick functions.
    - Tells the view what to render.

#### Functions

1. INIT
    - Creates the board.
    - Creates the board placement array.
    - Creates the players.
2. Game Over - Model - App
    - Determines if a player has won or if all the places on the board have been covered with no winner.
    - Only run if turn is greater than or equal to 5.
    - Runs an if state mean checking the win conditions
        - If one has been met tells the view to show which player one.
    - Checks to see if there is a tie.
        - If turn is equal to 8 and no win condition has been met tells the players that is a tie.
    - Else continue with the game.
4. generateBoard - Tile - View
    - Renders the board using the generateHTML function.
5. generateHTML - Tile and Game - View
    - Function to render HTML elements using javascript.
6. updateView - View
    - Used by the controller.
    - takes the marker and tile parameter and updates the html to put the correct mark in the correct tile.
7. updateState - Model - App
    - Used by the controller on event listener.
    - increases the turn.
    - Check to see whose turn it is.
        - If turn is even marker is equal to player 1
        - If odd marker is equal to player 2.
    - Updates the placement array.
    - Updates the view.
    - Checks the win conditions.


### Example

START

INIT() =>
CREATE Board
CREATE Players
CREATE currentBoard array
CREATE Mark variable
CREATE tile variable
CREATE win conditions
generateHTML()

onClick =>
updateState(I) =>
    if turn % 2 => mark = player1; tile = div clicked; value = 1
    else => mark = player2; tile = div clicked; value = 5
    
    updateArray(tile, value) =>
    puts the value in the index of tile

    gameOver() =>
    if turn >= 5 => check the win condtions => tell the view to show the winner
    else if turn = 8 => no win conditions me => tell the view to show a tie.

turn() =>
if turn % 2 => have the view show its player 1's turn
else => have the view show its player 2's turn

onResetClick() =>
resetBoard()

END

updateView() =>
tile = target.event.id into an integer;

if turn % 2 => event.target.innerText = player1, value = 1
else => event.target.innerText = player2, value = 5

updateArray(tile, value) =>
boardplacement.splice(tile, value)

turn++

gameOver() =>
let solution = [
    boardArray[0] + boardArray[1] + boardArray[2];
    boardArray[3] + boardArray[4] + boardArray[5];
    boardArray[6] + boardArray[7] + boardArray[8];
    boardArray[0] + boardArray[3] + boardArray[6];
    boardArray[1] + boardArray[4] + boardArray[7];
    boardArray[2] + boardArray[5] + boardArray[8];
    boardArray[0] + boardArray[4] + boardArray[8];
    boardArray[2] + boardArray[4] + boardArray[6];
]
let total = 0

for i = 0; i < solution.length; i++ =>
total += i

if total === 3 => alert that player 1 is the winner
if total === 15 => alert that player 2 is the winner
if total === 25 => alert that the game is a tie

click handler




