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

// listener functions
function reset() {
  clearGameBoard();
  const sizeSlider = document.querySelector("#sizeSlider");
  createGameBoard(sizeSlider.value);
}

function updateSize() {
  // doesn't resize on update in order to reduce CPU usage
  const sizeDisplay = document.querySelector("#sizeDisplay");
  const size = this.value;
  sizeDisplay.textContent = `${size} x ${size}`;
}

function updateColorMode() {
  const pieces = document.querySelectorAll(".gamePiece");
  if (this.id == "black") {
    pieces.forEach((piece) => {
      piece.removeEventListener("mouseover", makeRGB);
      piece.addEventListener("mouseover", makeBlack);
    })
  } else if (this.id == "rgb") {
    pieces.forEach((piece) => {
      piece.removeEventListener("mouseover", makeBlack);
      piece.addEventListener("mouseover", makeRGB);
    })
  }
}

// color modes
function makeBlack() {
  this.style.setProperty("background-color", `rgb(0,0,0)`);
}

function makeRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  this.style.setProperty("background-color", `rgb(${r},${g},${b})`);
}

// attach listeners to buttons and sliders
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", reset);

const sizeSlider = document.querySelector("#sizeSlider");
sizeSlider.addEventListener("input", updateSize);

const blackButton = document.querySelector("#black");
blackButton.addEventListener("click", updateColorMode);

const rgbButton = document.querySelector("#rgb");
rgbButton.addEventListener("click", updateColorMode);

createGameBoard(sizeSlider.value);
