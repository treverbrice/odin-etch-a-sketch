// create the gameBoard
function createGameBoard(size) {
  const gameBoard = document.querySelector("#gameBoard");
  // each row gets a div in order to format the grid
  for (let row = 1; row <= size; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    // create each div
    for (let col = 1; col <= size; col++) {
      const gamePiece = document.createElement("div");
      // attach listeners and classes
      gamePiece.addEventListener("mouseover", makeBlack);
      gamePiece.classList.add("gamePiece");
      rowDiv.appendChild(gamePiece);
    }
    gameBoard.appendChild(rowDiv);
  }
}

// color modes
function makeBlack() {
  this.classList.add("black");
}



// attach listeners to buttons and sliders

//listener functions

createGameBoard(16);
