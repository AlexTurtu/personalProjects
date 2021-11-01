//obstacle variables
var obst1top = 200;
var obst1left = 0;
var obst2top = 0;
var obst2left = 100;
var obst3top = 200;
var obst3lft = 600;
var obst4top = 500;
var obst4left = 300;
var obst5top = 0;
var obst5left = 400;
var obst6top = 100;
var obst6left = 100;
//tanks variables
var y = 0;
var x = 0;
var x1 = 700;
var y1 = 500;

// bullets variables
var bul1left = 0;
var bul1top = 0;

//other variables
var xx1 = 0; //test variable
var score = 0;
var score1 = 0;
document.onkeydown = arrowCheck;
document.onkeydown = arrowCheck;

function arrowCheck(e) {
  // MOVEMENT FUNCTION BENINGN
  //movement of brlue square - check functions on bottom
  if (e.keyCode == "39") {
    moveright();
  } else if (e.keyCode == "37") {
    moveleft();
  } else if (e.keyCode == "38") {
    moveup();
  } else if (e.keyCode == "40") {
    movedown();
  }
  // movement of red square
  else if (e.keyCode == "68") {
    document.getElementById("test2").style.backgroundImage =
      "url('img/tankright1.png')";
    while (x1 < 700) {
      if (x1 != obst1left || y1 != obst1top) {
        if (x1 != obst2left || y1 != obst2top) {
          if (x1 != obst3lft - 100 || y1 != obst3top) {
            if (x1 != obst4left - 100 || y1 != obst4top - 100) {
              if (x1 != obst5left - 100 || y1 != obst5top + 100) {
                if (x1 != obst6left - 100 || y1 != obst6top + 300) {
                  x1 = x1 + 100;
                  document.getElementById("test2").style.left = x1 + "px";
                  checkMatch();
                }
              }
            }
          }
        }
      }
      return;
    }
  } else if (e.keyCode == "65") {
    document.getElementById("test2").style.backgroundImage =
      "url('img/tankleft1.png')";
    while (x1 >= 100) {
      if (x1 != obst1left + 200 || y1 != obst1top) {
        if (x1 != obst2left + 200 || y1 != obst2top) {
          if (x1 != obst3lft + 100 || y1 != obst3top) {
            if (x1 != obst4left + 100 || y1 != obst4top - 100) {
              if (x1 != obst5left + 100 || y1 != obst5top + 100) {
                if (x1 != obst6left + 100 || y1 != obst6top + 300) {
                  x1 = x1 - 100;
                  document.getElementById("test2").style.left = x1 + "px";
                  checkMatch();
                }
              }
            }
          }
        }
      }
      return;
    }
  } else if (e.keyCode == "87") {
    document.getElementById("test2").style.backgroundImage =
      "url('img/tankup1.png')";
    while (y1 >= 100) {
      if (x1 != obst1left + 100 || y1 != obst1top + 100) {
        if (x1 != obst2left + 100 || y1 != obst2top + 100) {
          if (x1 != obst3lft || y1 != obst3top + 100) {
            if (x1 != obst4left || y1 != obst4top) {
              if (x1 != obst5left || y1 != obst5top + 200) {
                if (x1 != obst6left || y1 != obst6top + 400) {
                  y1 = y1 - 100;
                  document.getElementById("test2").style.top = y1 + "px";
                  checkMatch();
                }
              }
            }
          }
        }
      }
      return;
    }
  } else if (e.keyCode == "83") {
    document.getElementById("test2").style.backgroundImage =
      "url('img/tankdown1.png')";
    while (y1 <= 400) {
      if (x1 != obst1left + 100 || y1 != obst1top - 100) {
        if (x1 != obst2left + 100 || y1 != obst2top - 100) {
          if (x1 != obst3lft || y1 != obst3top - 100) {
            if (x1 != obst4left || y1 != obst4top - 200) {
              if (x1 != obst5left || y1 != obst5top) {
                if (x1 != obst6left || y1 != obst6top + 200) {
                  y1 = y1 + 100;
                  document.getElementById("test2").style.top = y1 + "px";
                  checkMatch();
                }
              }
            }
          }
        }
      }
      return;
    }
  } else if (e.keyCode == "88") {
    //do somehting when "X" is pressed
    document.getElementById("bullet2").style.backgroundColor = "Yellow";
    2;
    setTimeout(() => {
      document.getElementById("bullet2").style.backgroundColor = "Black";
    }, 100);
  } else if (e.keyCode == "77") {
    //do somthing when "/" is pressed
    document.getElementById("bullet1").style.backgroundColor = "Yellow";
    setTimeout(() => {
      document.getElementById("bullet1").style.backgroundColor = "Black";
    }, 100);
  }
}
function checkMatch() {
  if (x == x1 && y == y1) {
    score = score + 100;
    if (score >= 1000) {
      alert(
        "Game Over! Blue Wins! Score and position will be reset in 3 seconds!"
      );
      setInterval(() => {
        window.location.reload();
      }, 3000);
    }
    document.getElementById("score").innerHTML = "Score Blue: " + score;
  }
}
function start() {
  document.getElementById("bullet1").style.left = x + 45 + "px";
  document.getElementById("bullet1").style.top = y + 45 + "px";
  document.getElementById("bullet2").style.left = x1 - 655 + "px";
  document.getElementById("bullet2").style.top = y1 - 455 + "px";
}

function bullet1left() {
  setInterval(() => {
    while (bul1left <= 700) {
      if (e.keyCode == "88") {
        document.getElementById("bullet1").style.left = 45 + bul1left + "px";
        bul1left = bul1left + 50;
        setTimeout(() => {
          document.getElementById("bullet1").style.left = 50 + "px";
        }, 300);

        return;
      }
    }
  }, 100);
}
function moveright() {
  document.getElementById("test1").style.backgroundImage =
    "url('img/tankright.png')";
  while (x < 700) {
    if (x != obst1left || y != obst1top) {
      if (x != obst2left || y != obst2top) {
        if (x != obst3lft - 100 || y != obst3top) {
          if (x != obst4left - 100 || y != obst4top - 100) {
            if (x != obst5left - 100 || y != obst5top + 100) {
              if (x != obst6left - 100 || y != obst6top + 300) {
                x = x + 100;
                bul1left = bul1left = 100;
                document.getElementById("test1").style.left = x + "px";
                checkMatch();
              }
            }
          }
        }
      }
    }
    return;
  }
}
function moveleft() {
  document.getElementById("test1").style.backgroundImage =
    "url('img/tankleft.png')";
  while (x >= 100) {
    if (x != obst1left + 200 || y != obst1top) {
      if (x != obst2left + 200 || y != obst2top) {
        if (x != obst3lft + 100 || y != obst3top) {
          if (x != obst4left + 100 || y != obst4top - 100) {
            if (x != obst5left + 100 || y != obst5top + 100) {
              if (x != obst6left + 100 || y != obst6top + 300) {
                x = x - 100;
                document.getElementById("test1").style.left = x + "px";
                checkMatch();
              }
            }
          }
        }
      }
    }
    return;
  }
}
function moveup() {
  document.getElementById("test1").style.backgroundImage =
    "url('img/tankup.png')";
  while (y >= 100) {
    if (x != obst1left + 100 || y != obst1top + 100) {
      if (x != obst2left + 100 || y != obst2top + 100) {
        if (x != obst3lft || y != obst3top + 100) {
          if (x != obst4left || y != obst4top) {
            if (x != obst5left || y != obst5top + 200) {
              if (x != obst6left || y != obst6top + 400) {
                y = y - 100;
                document.getElementById("test1").style.top = y + "px";
                checkMatch();
              }
            }
          }
        }
      }
    }
    return;
  }
}
function movedown() {
  document.getElementById("test1").style.backgroundImage =
    "url('img/tankdown.png')";
  while (y <= 400) {
    if (x != obst1left + 100 || y != obst1top - 100) {
      if (x != obst2left + 100 || y != obst2top - 100) {
        if (x != obst3lft || y != obst3top - 100) {
          if (x != obst4left || y != obst4top - 200) {
            if (x != obst5left || y != obst5top) {
              if (x != obst6left || y != obst6top + 200) {
                y = y + 100;
                document.getElementById("test1").style.top = y + "px";
                checkMatch();
              }
            }
          }
        }
      }
    }
    return;
  }
}
