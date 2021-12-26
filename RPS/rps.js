var userSel = "";
var computerSel = "";

function checkResult() {}
function userRock() {
  userSel = "rock";
  document.getElementById("userHasSelected").innerText =
    "You have selected: " + userSel;
}
function userPaper() {
  userSel = "paper";
  document.getElementById("userHasSelected").innerText =
    "You have selected: " + userSel;
}
function userScissors() {
  userSel = "scissors";
  document.getElementById("userHasSelected").innerText =
    "You have selected: " + userSel;
}
function startGame() {
  if (userSel == "") {
    alert("Please select Rock, Paper or Scissors");
    return;
  }
  displayComputerChoice();
  pcSelect();
  setTimeout(() => {
    compareReslut();
    document.getElementById("computerHasSelected").innerText =
      "Computer has selected: " + computerSel;
  }, 3000);
}
function pcSelect() {
  var computerRand = Math.ceil(Math.random() * 3);

  if (computerRand == 1) {
    document.getElementById("compChoice").style.backgroundImage =
      "url('img/rock.png')";
    document.getElementById("compChoice").style.backgroundSize = "100px 100px";

    computerSel = "rock";
  } else if (computerRand == 2) {
    document.getElementById("compChoice").style.backgroundImage =
      "url('img/paper.png')";
    document.getElementById("compChoice").style.backgroundSize = "100px 100px";
    computerSel = "paper";
  } else {
    document.getElementById("compChoice").style.backgroundImage =
      "url('img/scissors.png')";
    document.getElementById("compChoice").style.backgroundSize = "100px 100px";
    computerSel = "scissors";
  }

  return computerSel;
}
function displayComputerChoice() {
  var choice = document.querySelector(".computerChoice");
  choice.classList.toggle("animation1");
}
function compareReslut() {
  var winner = "";

  if (computerSel == "rock") {
    if (userSel == "paper") {
      winner = "Player";
    } else if (userSel == "rock") {
      winner = "No-one";
    } else {
      winner = "Computer";
    }
  }
  if (computerSel == "paper") {
    if (userSel == "scissors") {
      winner = "Player";
    } else if (userSel == "paper") {
      winner = "No-one";
    } else {
      winner = "Computer";
    }
  }
  if (computerSel == "scissors") {
    if (userSel == "rock") {
      winner = "Player";
    } else if (userSel == "scissors") {
      winner = "No-one";
    } else {
      winner = "Computer";
    }
  }
  document.getElementById("winner").innerText = winner;
}
function resetAll() {
  location.reload();
}
