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

function clearGameBoard() {
  const gameBoard = document.querySelector("#gameBoard");
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
}

//listener functions
function reset() {
  clearGameBoard();
  const sizeSlider = document.querySelector("#sizeSlider");
  createGameBoard(sizeSlider.value);
}

function updateSize() {
  const sizeDisplay = document.querySelector("#sizeDisplay");
  const size = this.value;
  sizeDisplay.textContent = `${size} x ${size}`;
}

// color modes
function makeBlack() {
  this.classList.add("black");
}

// attach listeners to buttons and sliders
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", reset);

const sizeSlider = document.querySelector("#sizeSlider");
sizeSlider.addEventListener("input", updateSize);

createGameBoard(sizeSlider.value);
