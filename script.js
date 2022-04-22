// create the gameBoard
function createGameBoard(size) {
  const gameBoard = document.querySelector("#gameBoard");
  for (let row = 1; row <= size; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    for (let col = 1; col <= size; col++) {
      const gamePiece = document.createElement("div");
      gamePiece.classList.add("gamePiece");
      rowDiv.appendChild(gamePiece);
    }
    gameBoard.appendChild(rowDiv);
  }
}
  // create each div
  // attach listeners and classes

// attach listeners to buttons and sliders

//color modes

//listener functions

createGameBoard(10);
