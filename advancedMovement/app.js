var canvas = document.getElementById("myCanvas");
var canvasContext = canvas.getContext("2d");
var canvasSecond = canvas.getContext("2d");
var obstacleOne = canvas.getContext("2d");
canvasSecond.fillStyle = "green";
var obstacleOneTopMargin = Math.floor(Math.random() * 100);
// function resize() {
//   canvasContext.canvas.width = window.innerWidth;
//   canvasContext.canvas.height = window.innerHeight;
// }
var posGreenX = 0;
var posGreeny = 0;
function resetMove() {
  canvasSecond.clearRect(0, 0, canvas.width, canvas.height);
  obstacleOne.fillRect(110, obstacleOneTopMargin, 10, 100);
}

document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 37: //Left
      if (posGreenX >= 10) posGreenX -= 10;
      resetMove();
      drawPlayer();
      break;
    case 38: //Up
      if (posGreeny >= 10) posGreeny -= 10;
      resetMove();
      drawPlayer();
      break;
    case 39: //Right
      if (posGreenX <= canvas.width - 20) posGreenX += 10;
      resetMove();
      drawPlayer();
      break;
    case 40: //Down
      if (posGreeny < canvas.height - 10) posGreeny += 10;
      resetMove();
      drawPlayer();
      break;
    case 32: //Space Key
      console.log("space");
      drawObstacleOne();
      break;
  }
});
function drop() {
  while (posGreeny < canvas.height) {
    posGreeny += 10;
    setTimeout(resetMove, 100);
    drawPlayer();
  }
}
document.addEventListener("keyup", function (x) {
  switch (x.keyCode) {
    case 38:
      setTimeout(setInterval(drop, 1000), 1000);
  }
});
function drawPlayer() {
  canvasSecond.fillRect(posGreenX, posGreeny, 10, 10);
}

function drawObstacleOne() {
  obstacleOne.fillRect(100, obstacleOneTopMargin, 10, 100);
}

drawPlayer();

// canvasSecond.fillRect(posGreenX, posGreeny, 10, 10);
