var userSel = "";
var computerSel = "";

function checkResult() {}
function userRock() {
  userSel = "rock";
  document.getElementById("userHasSlecedP").innerText = "User: " + userSel;
  document.getElementById("userSelectionDisplay").style.backgroundImage =
    "url('img/rock.png')";
}
function userPaper() {
  userSel = "paper";
  document.getElementById("userHasSlecedP").innerText = "User: " + userSel;
  document.getElementById("userSelectionDisplay").style.backgroundImage =
    "url('img/paper.png')";
}
function userScissors() {
  userSel = "scissors";
  document.getElementById("userHasSlecedP").innerText = "User: " + userSel;
  document.getElementById("userSelectionDisplay").style.backgroundImage =
    "url('img/scissors.png')";
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
      "Computer : " + computerSel;
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
  var winScreen = document.querySelector(".winResult");
  winScreen.classList.add("isVisible");
  document.getElementById("winner").innerText = winner;
  document.getElementById("lastComputerSelect").innerText =
    "Computer chose: " + computerSel;
  document.getElementById("lastUserSelect").innerText =
    "User chose: " + userSel;
}
function resetAll() {
  location.reload();
}
