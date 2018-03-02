var easyMode = true;

var redValue = document.querySelector("#redValue");
var blueValue = document.querySelector("#blueValue");
var greenValue = document.querySelector("#greenValue");

var easyButton = document.querySelector(".easyModeButton");
var hardButton = document.querySelector(".hardModeButton");

var currentRgbValues = [0, 0, 0];



function setHeaderBackgroundColor(p_color) {
  let body = document.getElementsByTagName("body")[0];
  body.style.background = p_color;
}

function getRandomColorValue() {
  // generate a random int between 0 (include) and 256 (exclude)
  return Math.floor(Math.random() * Math.floor(256));
}

function generateRandomRgb() {
  currentRgbValues = [
    getRandomColorValue(),
    getRandomColorValue(),
    getRandomColorValue()
  ];
}

console.log(currentRgbValues);
generateRandomRgb();
console.log(currentRgbValues);
