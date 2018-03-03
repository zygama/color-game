var currentRgbValues = [0, 0, 0]; // represents the RGB values via an array of 3 values

var winningIndexSquare = null;
var easyMode = true;

var redValue = document.querySelector("#redValue");
var blueValue = document.querySelector("#blueValue");
var greenValue = document.querySelector("#greenValue");

var easyButton = document.querySelector(".easyModeButton");
var hardButton = document.querySelector(".hardModeButton");
var newColorsButton = document.querySelector("#newColors");

var textResultOfATry = document.querySelector(".resultOfATry");

var squaresColors = document.querySelectorAll(".squareColor");


function setHeaderBackgroundColor(p_color) {
  let body = document.getElementsByTagName("body")[0];
  body.style.background = p_color;
}

function getRandomIndex() {
  // generate a random int between 0 (include) and x (exclude)
  if (easyMode) {
    return Math.floor(Math.random() * Math.floor(3));
  } else {
    return Math.floor(Math.random() * Math.floor(6));
  }
}

function getRandomColorValue() {
  // generate a random int between 0 (include) and 256 (exclude)
  return Math.floor(Math.random() * Math.floor(256));
}

function generateRandomRgb() {

  let red = getRandomColorValue();
  let green = getRandomColorValue();
  let blue = getRandomColorValue();

  currentRgbValues = [red, green, blue];

  redValue.textContent = red.toString();
  greenValue.textContent = green.toString();
  blueValue.textContent = blue.toString();

  console.log(currentRgbValues);
}

function setRandomRgbToSquares() {
  let randomSquareIndex = getRandomIndex();
  squaresColors.forEach( function(square) {
    square.style.background = `rgb(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()})`;
  });

  squaresColors[randomSquareIndex].style.background =
    `rgb(${currentRgbValues[0]}, ${currentRgbValues[1]}, ${currentRgbValues[2]})`;
}

function generateNewColors() {
  generateRandomRgb();
  setRandomRgbToSquares();
}

function reloadGame() {
  generateNewColors();
  setHeaderBackgroundColor("rgb(74, 118, 184)");
  textResultOfATry.textContent = "";

  squaresColors.forEach( function(square) {
    square.classList.remove("makeSquareDisapear");
  });
}

function toggleDifficultyMode() {
  let secondRow = document.querySelector(".secondRowColors");

  secondRow.classList.toggle("hardModeRow");
}

function addEventListenersOnSquares() {
  squaresColors.forEach( function(square) {
    square.addEventListener("click", function() {
      isWon(square);
    });
  });
}

function addEventListenersOnButtons() {
  easyButton.addEventListener("click", function() {
    if (!easyMode) {
      easyMode = true;
      this.classList.add("difficultyModeSelected");
      hardButton.classList.remove("difficultyModeSelected");
      toggleDifficultyMode();
      reloadGame();
    }
  });
  hardButton.addEventListener("click", function() {
    if (easyMode) {
      easyMode = false;
      this.classList.add("difficultyModeSelected");
      easyButton.classList.remove("difficultyModeSelected");
      toggleDifficultyMode();
      reloadGame();
    }
  });
  newColorsButton.addEventListener("click", function() {
    reloadGame();
    this.textContent = "New Colors";
  });
}

function addEventListeners() {
  addEventListenersOnSquares();
  addEventListenersOnButtons();
}

function isWon(p_squareClicked) {
  let squareClickedRGB = p_squareClicked.style.background;
  let currentRgbValuesString =
    `rgb(${currentRgbValues[0]}, ${currentRgbValues[1]}, ${currentRgbValues[2]})`;

  if (squareClickedRGB == currentRgbValuesString) {
    textResultOfATry.textContent = "That was right ! :D";
    setHeaderBackgroundColor(currentRgbValuesString);
    squaresColors.forEach( function(square) {
      square.style.background = squareClickedRGB;
      newColorsButton.textContent = "Play again !";
      square.classList.remove("makeSquareDisapear");
    });
  } else {
    textResultOfATry.textContent = "That was false... :/";
    // p_squareClicked.classList.add("squareClickedIsFalse");
    p_squareClicked.classList.add("makeSquareDisapear");
  }
}


generateRandomRgb();
setRandomRgbToSquares();
addEventListeners();
