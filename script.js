// create the gameBoard
function createGameBoard(size) {
  const gameBoard = document.querySelector("#gameBoard");
  for(let row = 1; row <= size; row++) {
    for(let col = 1; col <= size; col++) {
      const gamePiece = document.createElement("div");
      gameBoard.appendChild(gamePiece);
    }
  }
}
  // create each div
  // attach listeners and classes

// attach listeners to buttons and sliders

//color modes

//listener functions

createGameBoard(4);
