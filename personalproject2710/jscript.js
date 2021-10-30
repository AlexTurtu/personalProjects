var i = 100;
var j = 50;
var palmTop = 100;
var plamLeft = 50;
var palm1Top = 100;
var palm1Left = 50;
var score = 0;
var selectArray = ["demo", "demo1"];
function startG() {
  palmTop = Math.floor(Math.random() * 4);
  palmLeft = Math.floor(Math.random() * 7);
  palmTop = palmTop * 100;
  palmLeft = palmLeft * 100;
  document.getElementById("palm1").style.top = palmTop + "px";
  document.getElementById("palm1").style.left = palmLeft + "px";
  document.getElementById("palm2").style.left = palmLeft + "px";
  document.getElementById("palm2").style.left = palmLeft + "px";
  randomCoin();
}
function randomCoin() {
  coinTop = Math.floor(Math.random() * 4);
  coinLeft = Math.floor(Math.random() * 7);
  coinTop = coinTop * 50;
  coinLeft = coinLeft * 100;
  document.getElementById("coin").style.left = coinLeft + "px";
  document.getElementById("coin").style.top = coinTop + "px";
}
function checkMatch() {
  if (coinTop == j - 300 && coinLeft == i - 100) {
    score = score + 100;
    randomCoin();
    startG();
    document.getElementById("score").innerHTML = "SCORE: $" + score;
  }
}

function mover() {
  if (i != palmLeft || (j !== palmTop + 150 && j != palmTop + 100)) {
    while (i < 700) {
      i = i + 100;
      document.getElementById("monster").style.left = i + "px";
      document.getElementById("monster").style.right = i + "px";
      checkMatch();
      return;
    }
  } else {
    alert("Ouuups!!! This Bomb is the BAD one! Score lowered by $100.");
    score = score - 100;
    document.getElementById("score").innerHTML = "SCORE: $" + score;
    startG();
    if (score == -100) {
      alert("! Game Over !");
      location.reload();
    }
  }
}
function movel() {
  if (i != palmLeft + 200 || (j !== palmTop + 100 && j != palmTop + 150)) {
    while (i > 100) {
      i = i - 100;
      document.getElementById("monster").style.left = i + "px";
      document.getElementById("monster").style.right = i + "px";
      checkMatch();
      return;
    }
  } else {
    alert("Ouuups!!! This Bomb is the BAD one! Score lowered by $100.");
    score = score - 100;
    document.getElementById("score").innerHTML = "SCORE: $" + score;
    startG();
    if (score == -100) {
      alert("! Game Over !");
      location.reload();
    }
  }
}
function moveu() {
  if (i != palmLeft + 100 || j != palmTop + 200) {
    while (j > 100) {
      j = j - 50;
      document.getElementById("monster").style.top = j + "px";
      document.getElementById("monster").style.bottom = j + "px";
      checkMatch();
      return;
    }
  } else {
    alert("Ouuups!!! This Bomb is the BAD one! Score lowered by $100.");
    score = score - 100;
    document.getElementById("score").innerHTML = "SCORE: $" + score;
    startG();
    if (score == -100) {
      alert("! Game Over !");
      location.reload();
    }
  }
}
function moved() {
  if (i != palmLeft + 100 || j != palmTop + 50) {
    while (j < 450) {
      j = j + 50;
      document.getElementById("monster").style.top = j + "px";
      document.getElementById("monster").style.bottom = j + "px";
      checkMatch();
      return;
    }
  } else {
    alert("Ouuups!!! This Bomb is the BAD one! Score lowered by $100.");
    score = score - 100;
    document.getElementById("score").innerHTML = "SCORE: $" + score;
    startG();
    if (score == -100) {
      alert("! Game Over !");
      location.reload();
    }
  }
}
