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
  squaresColors.forEach( function(square) {
    square.style.background = `rgb(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()})`;
  });
}

function generateNewColors() {
  generateRandomRgb();
  setRandomRgbToSquares();
}

function toggleDifficultyMode() {
  let secondRow = document.querySelector(".secondRowColors");

  secondRow.classList.toggle("hardModeRow");
}

function addEventListenersOnSquares() {
  squaresColors.forEach( function(square) {
    square.addEventListener("click", function() {console.log(square.style.background)});
  });
}

function addEventListenersOnButtons() {
  easyButton.addEventListener("click", function() {
    if (!easyMode) {
      easyMode = true;
      this.classList.add("difficultyModeSelected");
      hardButton.classList.remove("difficultyModeSelected");
      toggleDifficultyMode();
      generateNewColors();
    }
  });
  hardButton.addEventListener("click", function() {
    if (easyMode) {
      easyMode = false;
      this.classList.add("difficultyModeSelected");
      easyButton.classList.remove("difficultyModeSelected");
      toggleDifficultyMode();
      generateNewColors();
    }
  });
  newColorsButton.addEventListener("click", generateNewColors);
}

function addEventListeners() {
  addEventListenersOnSquares();
  addEventListenersOnButtons();
}

// toggleDifficultyMode();
generateRandomRgb();
setRandomRgbToSquares();
addEventListeners();
