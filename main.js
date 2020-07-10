// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const gridBaseCount = 10;
const gridBaseSize = width / gridBaseCount;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  context.lineWidth = 2;
  for (let x = 0; x <= height; x += gridBaseSize) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 0; y <= width; y += gridBaseSize) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}
function drawEverything() {
  context.clearRect(0, 0, width, height);
  drawGrid();
}

setTimeout(drawEverything, 500);
