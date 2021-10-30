// Variables:
const moveBy = 10;
var carnow = 15;
var stoplines = 5;
var posline0 = 0;
var increaseSpeed = 40;
var yellowCarSpeed = 10;
var greenCarSpeed = 50;
var posYellowCar = 0;

// Other instructions:
document.onkeydown = checkKey;

// FUNCTIONS :
function moveRight() {
  while (carnow < 18) {
    carnow = carnow + moveBy;
    document.getElementById("carContainer").style.left = carnow + "%";
    return;
  }
}
function moveLeft() {
  while (carnow > 10) {
    carnow = carnow - moveBy;
    document.getElementById("carContainer").style.left = carnow + "%";
    return;
  }
}
function checkKey(e) {
  if (e.keyCode == "37") {
    moveLeft();
  } else if (e.keyCode == "39") {
    moveRight();
  } else if (e.keyCode == "88") {
    stoplines = 10;
    alert("ok");
  }
}
function StartGame() {
  let checkhorizontal =
    parseInt(document.getElementById("carContainer").style.left) - 36;
  let checkhorizontal2 = parseInt(
    document.getElementById("yellowCar").style.left
  );
  if (checkhorizontal == checkhorizontal2) {
    alert("fail");
  } else {
    setInterval(function () {
      while (posline0 < 500) {
        document.getElementById("roadline0").style.top =
          posline0 + increaseSpeed + "px";
        posline0 = posline0 + increaseSpeed;
        if (posline0 == 400) {
          posline0 = 0;
        }
        return;
      }
    }, 200);
    setInterval(function () {
      while (posYellowCar < 600) {
        document.getElementById("yellowCar").style.top =
          posYellowCar + yellowCarSpeed + "px";
        posYellowCar = posYellowCar + yellowCarSpeed;
        if (posYellowCar == 600) {
          posYellowCar = 0;
        }
        return;
      }
    }, 200);
    setInterval(function () {
      while (posYellowCar < 600) {
        document.getElementById("greenCar").style.top =
          posYellowCar + greenCarSpeed + "px";
        posYellowCar = posYellowCar + greenCarSpeed;
        if (posYellowCar == 600) {
          posYellowCar = 0;
        }
        return;
      }
    }, 100);
  }
}
