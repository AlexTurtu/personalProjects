var car = document.querySelector("#redCarTop");
var carLeft = parseInt(window.getComputedStyle(car).left);
var street = document.querySelector(".center ");
var carObstacle = document.createElement("div");
var id = 0;
var oldID;
var score = 0;

//look for key input
window.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 37:
      //move left
      moveCarleft();
      break;
    case 39:
      //move right
      moveCarRight();
      break;
    case 32:
      //start gamme
      startGame();
      break;
  }
});

//create car
function creatBlueCar() {
  var horizontalPosition = 200 + Math.floor(Math.random() * 5) * 100;
  street.appendChild(carObstacle);
  carObstacle.style.top = 200 + "px";
  carObstacle.classList.add("blueCar");
  carObstacle.classList.add("carGoDown");
  carObstacle.style.left = horizontalPosition + "px";
  carObstacle.setAttribute("id", id);
  oldID = id;
  id++;
  // remove created car and create new one as soon as old one is no longer visible
  setTimeout(() => {
    document.getElementById(oldID).remove();
    id = 0;
    score = score + 100;
  }, 1950);
  // display Score
  document.querySelector(".leftSide").innerHTML = "Score: <br>" + score;
}

//colision check
function checkCollision(id2) {
  //get values from position
  var obsLeft = getComputedStyle(document.getElementById(id2), "154");
  var obsTop = getComputedStyle(document.getElementById(id2), "254");
  // set attribute to values got on the poitions wiht "top" and "left" based on the above code 154 = left 254 = top
  if (parseInt(obsTop.top) >= 400 && parseInt(obsLeft.left) == carLeft + 200) {
    car.src = "img/redCarLeft.png";
    alert("You crashed!!! Game will reload. Score: " + score);
    location.reload();
    return;
  }
}
function turnLeft() {
  car.src = "img/redCarLeft.png";
  setTimeout(() => {
    car.src = "img/redCarTop.png";
  }, 50);
}
function turnRight() {
  car.src = "img/redCarRight.png";
  setTimeout(() => {
    car.src = "img/redCarTop.png";
  }, 50);
}
function moveCarleft() {
  if (carLeft >= 100) {
    console.log("left");
    carLeft = carLeft - 100;
    car.style.left = carLeft + "px";
    turnLeft();
  }
}
function moveCarRight() {
  if (carLeft < 400) {
    console.log("right");
    carLeft = carLeft + 100;
    car.style.left = carLeft + "px";
    turnRight();
  }
}
function startGame() {
  street.classList.toggle("moveBackgound");
  setInterval(() => {
    checkCollision(oldID);
  }, 100);
  setInterval(() => {
    creatBlueCar();
  }, 2000);
}
