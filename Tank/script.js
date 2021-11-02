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
var bulletx = 0;
var bullety = 0;
var bulletx1 = 0;
var bullety1 = 0;

//navigation variables
var navposblue = "R";
var navposred = "L";
var maximright = 700;

//other variables
var xx1 = 0; //test variable

//counters
var score = 0;
var score1 = 0;
var countbulletx = 0;

//sound variables
var explosionboom = new Audio("sound/explosion.wav");
var engines = new Audio("sound/engine.wav");
var engines1 = new Audio("sound/engine1.wav");
var bluefire = new Audio("sound/nutfall.flac ");
var redfire = new Audio("sound/nutfall1.flac ");

//key check

document.onkeydown = arrowCheck;
document.onkeydown = arrowCheck;
document.onkeyup = fire1;

//functions

function arrowCheck(e) {
  // MOVEMENT FUNCTION BENINGN
  //movement of brlue square - check functions on bottom
  if (e.keyCode == "39") {
    moveright();
    navposblue = "R";
  } else if (e.keyCode == "37") {
    moveleft();
    navposblue = "L";
  } else if (e.keyCode == "38") {
    moveup();
    navposblue = "U";
  } else if (e.keyCode == "40") {
    movedown();
    navposblue = "D";
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
                  enginesound1();
                  document.getElementById("test2").style.left = x1 + "px";
                  navposred = "R";
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
                  enginesound1();
                  document.getElementById("test2").style.left = x1 + "px";
                  navposred = "L";
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
                  enginesound1();
                  document.getElementById("test2").style.top = y1 + "px";
                  navposred = "U";
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
                  enginesound1();
                  document.getElementById("test2").style.top = y1 + "px";
                  navposred = "D";
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
function scoreplus() {
  score = score + 100;
  document.getElementById("score").innerHTML = "Score Blue: " + score;
}
function scoreplus1() {
  score1 = score1 + 100;
  document.getElementById("score1").innerHTML = "Score Red: " + score1;
}
function start() {
  document.getElementById("bullet1").style.left = x + 45 + "px";
  document.getElementById("bullet1").style.top = y + 45 + "px";
  document.getElementById("bullet2").style.left = x1 - 655 + "px";
  document.getElementById("bullet2").style.top = y1 - 455 + "px";
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
                bulletx = bulletx + 100;
                navposblue = "R";
                enginesound();

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
                bulletx = bulletx - 100;
                navposblue = "L";
                enginesound();

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
                bullety = bullety - 100;
                navposblue = "U";
                enginesound();
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
                bullety = bullety + 100;
                navposblue = "D";
                enginesound();
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

function retunbuller() {
  bulletx = x;

  document.getElementById("bullet").style.left = bulletx + "px";
  document.getElementById("bullet").style.top = bullety + "px";
}
function fire1(q) {
  if (q.keyCode == "76") {
    //blue tank fire
    bluesound();
    if (navposblue == "L") {
      document.getElementById("test1").style.backgroundImage =
        "url('img/tankleftboom.png')";
      setTimeout(() => {
        document.getElementById("test1").style.backgroundImage =
          "url('img/tankleft.png')";
      }, 100);
    } else if (navposblue == "R") {
      document.getElementById("test1").style.backgroundImage =
        "url('img/tankrightboom.png')";
      setTimeout(() => {
        document.getElementById("test1").style.backgroundImage =
          "url('img/tankright.png')";
      }, 100);
    } else if (navposblue == "U") {
      document.getElementById("test1").style.backgroundImage =
        "url('img/tankupboom.png')";
      setTimeout(() => {
        document.getElementById("test1").style.backgroundImage =
          "url('img/tankup.png')";
      }, 100);
    } else if (navposblue == "D") {
      document.getElementById("test1").style.backgroundImage =
        "url('img/tankdownboom.png')";
      setTimeout(() => {
        document.getElementById("test1").style.backgroundImage =
          "url('img/tankdown.png')";
      }, 100);
    }
    // positions check
    if (
      //check if rany tank on his right on line 1
      x >= 300 &&
      x <= 700 &&
      x1 >= 300 &&
      x1 <= 700 &&
      y1 == y &&
      y1 == 0 &&
      navposblue == "R" &&
      x < x1
    ) {
      boom();
    } else if (
      //check if any tank on his right on line 2 - left
      y == y1 &&
      x <= 400 &&
      x >= 100 &&
      x1 <= 400 &&
      x1 >= 100 &&
      navposblue == "R" &&
      x < x1
    ) {
      boom();
    } else if (
      //check if any tank on his right on line 2 - right
      y == 100 &&
      y == y1 &&
      x <= 700 &&
      x >= 500 &&
      x1 <= 700 &&
      x1 >= 500 &&
      navposblue == "R" &&
      x < x1
    ) {
      boom();
    } else if (
      // //check if any tank on his right on line 3
      y == 200 &&
      y == y1 &&
      x <= 500 &&
      x1 <= 500 &&
      x >= 200 &&
      x1 >= 200 &&
      navposblue == "R" &&
      x < x1
    ) {
      boom();
    } else if (
      //check if any tank on his right on line 4
      y == 300 &&
      y == y1 &&
      navposblue == "R" &&
      x < x1
    ) {
      boom();
    } else if (
      //check if any tank on his right on line 5
      y == 400 &&
      y == y1 &&
      x < x1 &&
      x >= 400 &&
      x1 >= 400 &&
      navposblue == "R"
    ) {
      boom();
    } else if (
      //check if any tank on his right on line 6
      y == 500 &&
      y == y1 &&
      x < x1 &&
      navposblue == "R"
    ) {
      boom();
    } else if (
      //check if any tank on his left line 1
      x >= 300 &&
      x <= 700 &&
      x1 >= 300 &&
      x1 <= 700 &&
      y1 == y &&
      y1 == 0 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom();
    } else if (
      //check if any tank on his left line 2 - left
      y == 100 &&
      y == y1 &&
      x <= 400 &&
      x >= 0 &&
      x1 <= 400 &&
      x1 >= 0 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom();
    } else if (
      //check if any tank on his left line 2 - right
      y == 100 &&
      y == y1 &&
      x <= 700 &&
      x >= 500 &&
      x1 <= 700 &&
      x1 >= 500 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom();
    } else if (
      //check if any tank on his left line 3
      y == 200 &&
      y == y1 &&
      x <= 500 &&
      x1 <= 500 &&
      x >= 200 &&
      x1 >= 200 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom();
    } else if (
      //check if any tank on his left line 4
      y == 300 &&
      y == y1 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom();
    } else if (
      //check if any tank on his left line 5
      y == 400 &&
      y == y1 &&
      x > x1 &&
      x >= 400 &&
      x1 >= 400 &&
      navposblue == "L"
    ) {
      boom();
    } else if (
      // check if any tank below row 1
      x == 0 &&
      x == x1 &&
      y < y1 &&
      navposblue == "D"
    ) {
      boom();
    } else if (
      // check if any tank below row 3 (no need to check row 2 as per no valid position)
      x == 200 &&
      x == x1 &&
      y < y1 &&
      navposblue == "D"
    ) {
      boom();
    } else if (
      // check if any tank below row 4
      x == 300 &&
      x === x1 &&
      y < y1 &&
      y >= 0 &&
      y <= 400 &&
      y1 >= 0 &&
      y1 <= 400 &&
      navposblue == "D"
    ) {
      boom();
    } else if (
      // check if any tank below row 4
      x == 400 &&
      x == x1 &&
      y >= 200 &&
      y <= 500 &&
      y1 >= 200 &&
      y1 <= 600 &&
      navposblue == "D" &&
      y < y1
    ) {
      boom();
    } else if (
      // check if any tank below row 5
      x == 500 &&
      x == x1 &&
      y < y1 &&
      navposblue == "D"
    ) {
      boom();
    } else if (
      // check if any tank below row 6
      x == 600 &&
      x == x1 &&
      y < y1 &&
      y >= 400 &&
      y1 >= 400 &&
      navposblue == "D"
    ) {
      boom();
    } else if (
      // check if any tank below row 7
      x == 700 &&
      x == x1 &&
      y < y1 &&
      navposblue == "D"
    ) {
      boom();
    } else if (
      // check if any tank above row1
      x == 0 &&
      x == x1 &&
      y > y1 &&
      navposblue == "U"
    ) {
      boom();
    } else if (
      // check if any tank above row3 (no need to check row 2 as per no valid position)
      x == 200 &&
      x == x1 &&
      y > y1 &&
      navposblue == "U"
    ) {
      boom();
    } else if (
      // check if any tank above row 4
      x == 400 &&
      x == x1 &&
      y >= 200 &&
      y <= 500 &&
      y1 >= 200 &&
      y1 <= 600 &&
      navposblue == "U" &&
      y > y1
    ) {
      boom();
    } else if (
      // check if any tank above row 5
      x == 400 &&
      x == x1 &&
      y >= 200 &&
      y <= 500 &&
      y1 >= 200 &&
      y1 <= 600 &&
      navposblue == "U" &&
      y > y1
    ) {
      boom();
    } else if (
      // check if any above below row 6
      x == 600 &&
      x == x1 &&
      y > y1 &&
      y >= 400 &&
      y1 >= 400 &&
      navposblue == "U"
    ) {
      boom();
    } else if (
      // check if any above below row 7
      x == 700 &&
      x == x1 &&
      y > y1 &&
      navposblue == "U"
    ) {
      boom();
    }
  } else if (q.keyCode == "81") {
    redsound();
    //red tank fire
    if (navposred == "L") {
      document.getElementById("test2").style.backgroundImage =
        "url('img/tankboomleft1.png')";
      setTimeout(() => {
        document.getElementById("test2").style.backgroundImage =
          "url('img/tankleft1.png')";
      }, 100);
    } else if (navposred == "R") {
      document.getElementById("test2").style.backgroundImage =
        "url('img/tankboomright1.png')";
      setTimeout(() => {
        document.getElementById("test2").style.backgroundImage =
          "url('img/tankright1.png')";
      }, 100);
    } else if (navposred == "U") {
      document.getElementById("test2").style.backgroundImage =
        "url('img/tankboomup1.png')";
      setTimeout(() => {
        document.getElementById("test2").style.backgroundImage =
          "url('img/tankup1.png')";
      }, 100);
    } else if (navposred == "D") {
      document.getElementById("test2").style.backgroundImage =
        "url('img/tankboomdown1.png')";
      setTimeout(() => {
        document.getElementById("test2").style.backgroundImage =
          "url('img/tankdown1.png')";
      }, 100);
    }
    // positions check red
    if (
      //check if rany tank on his right on line 1
      x1 >= 300 &&
      x <= 700 &&
      x1 >= 300 &&
      x1 <= 700 &&
      y1 == y &&
      y1 == 0 &&
      navposblue == "R" &&
      x > x1
    ) {
      boom1();
    } else if (
      //check if any tank on his right on line 2 - left
      y == y1 &&
      x <= 400 &&
      x >= 100 &&
      x1 <= 400 &&
      x1 >= 100 &&
      navposblue == "R" &&
      x > x1
    ) {
      boom1();
    } else if (
      //check if any tank on his right on line 2 - right
      y == 100 &&
      y == y1 &&
      x <= 700 &&
      x >= 500 &&
      x1 <= 700 &&
      x1 >= 500 &&
      navposblue == "R" &&
      x > x1
    ) {
      boom1();
    } else if (
      // //check if any tank on his right on line 3
      y == 200 &&
      y == y1 &&
      x <= 500 &&
      x1 <= 500 &&
      x >= 200 &&
      x1 >= 200 &&
      navposblue == "R" &&
      x > x1
    ) {
      boom1();
    } else if (
      //check if any tank on his right on line 4
      y == 300 &&
      y == y1 &&
      navposblue == "R" &&
      x < x1
    ) {
      boom1();
    } else if (
      //check if any tank on his right on line 5
      y == 400 &&
      y == y1 &&
      x < x1 &&
      x >= 400 &&
      x1 >= 400 &&
      navposblue == "R"
    ) {
      boom1();
    } else if (
      //check if any tank on his right on line 6
      y == 500 &&
      y == y1 &&
      x < x1 &&
      navposblue == "R"
    ) {
      boom1();
    } else if (
      //check if any tank on his left line 1
      x >= 300 &&
      x <= 700 &&
      x1 >= 300 &&
      x1 <= 700 &&
      y1 == y &&
      y1 == 0 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom1();
    } else if (
      //check if any tank on his left line 2 - left
      y == 100 &&
      y == y1 &&
      x <= 400 &&
      x >= 0 &&
      x1 <= 400 &&
      x1 >= 0 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom1();
    } else if (
      //check if any tank on his left line 2 - right
      y == 100 &&
      y == y1 &&
      x <= 700 &&
      x >= 500 &&
      x1 <= 700 &&
      x1 >= 500 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom1();
    } else if (
      //check if any tank on his left line 3
      y == 200 &&
      y == y1 &&
      x <= 500 &&
      x1 <= 500 &&
      x >= 200 &&
      x1 >= 200 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom1();
    } else if (
      //check if any tank on his left line 4
      y == 300 &&
      y == y1 &&
      navposblue == "L" &&
      x > x1
    ) {
      boom1();
    } else if (
      //check if any tank on his left line 5
      y == 400 &&
      y == y1 &&
      x > x1 &&
      x >= 400 &&
      x1 >= 400 &&
      navposblue == "L"
    ) {
      boom1();
    } else if (
      // check if any tank below row 1
      x == 0 &&
      x == x1 &&
      y < y1 &&
      navposblue == "D"
    ) {
      boom1();
    } else if (
      // check if any tank below row 3 (no need to check row 2 as per no valid position)
      x == 200 &&
      x == x1 &&
      y < y1 &&
      navposblue == "D"
    ) {
      boom1();
    } else if (
      // check if any tank below row 4
      x == 300 &&
      x === x1 &&
      y < y1 &&
      y >= 0 &&
      y <= 400 &&
      y1 >= 0 &&
      y1 <= 400 &&
      navposblue == "D"
    ) {
      boom1();
    } else if (
      // check if any tank below row 4
      x == 400 &&
      x == x1 &&
      y >= 200 &&
      y <= 500 &&
      y1 >= 200 &&
      y1 <= 600 &&
      navposblue == "D" &&
      y < y1
    ) {
      boom1();
    } else if (
      // check if any tank below row 5
      x == 500 &&
      x == x1 &&
      y < y1 &&
      navposblue == "D"
    ) {
      boom1();
    } else if (
      // check if any tank below row 6
      x == 600 &&
      x == x1 &&
      y < y1 &&
      y >= 400 &&
      y1 >= 400 &&
      navposblue == "D"
    ) {
      boom1();
    } else if (
      // check if any tank below row 7
      x == 700 &&
      x == x1 &&
      y < y1 &&
      navposblue == "D"
    ) {
      boom1();
    } else if (
      // check if any tank above row1
      x == 0 &&
      x == x1 &&
      y > y1 &&
      navposblue == "U"
    ) {
      boom1();
    } else if (
      // check if any tank above row3 (no need to check row 2 as per no valid position)
      x == 200 &&
      x == x1 &&
      y > y1 &&
      navposblue == "U"
    ) {
      boom1();
    } else if (
      // check if any tank above row 4
      x == 400 &&
      x == x1 &&
      y >= 200 &&
      y <= 500 &&
      y1 >= 200 &&
      y1 <= 600 &&
      navposblue == "U" &&
      y > y1
    ) {
      boom1();
    } else if (
      // check if any tank above row 5
      x == 400 &&
      x == x1 &&
      y >= 200 &&
      y <= 500 &&
      y1 >= 200 &&
      y1 <= 600 &&
      navposblue == "U" &&
      y > y1
    ) {
      boom1();
    } else if (
      // check if any above below row 6
      x == 600 &&
      x == x1 &&
      y > y1 &&
      y >= 400 &&
      y1 >= 400 &&
      navposblue == "U"
    ) {
      boom1();
    } else if (
      // check if any above below row 7
      x == 700 &&
      x == x1 &&
      y > y1 &&
      navposblue == "U"
    ) {
      boom1();
    }
  }
}

//boom for blue tank
function boom() {
  document.getElementById("test2").style.backgroundImage =
    "url('img/boom.png')";
  scoreplus();
  setTimeout(() => {
    explosionboom.play();
    x = 0;
    y = 0;
    x1 = 700;
    y1 = 500;
    document.getElementById("test1").style.left = x + "px";
    document.getElementById("test1").style.top = y + "px";
    document.getElementById("test2").style.left = x1 + "px";
    document.getElementById("test2").style.top = y1 + "px";
    document.getElementById("test2").style.backgroundImage =
      "url('img/tankleft1.png')";
  }, 100);
}
//engine sound function
function enginesound() {
  engines.play();
}
function enginesound1() {
  engines1.play();
}
function bluesound() {
  bluefire.play();
}
function redsound() {
  redfire.play();
}

// boom for red tank
function boom1() {
  document.getElementById("test1").style.backgroundImage =
    "url('img/boom.png')";
  scoreplus1();
  setTimeout(() => {
    explosionboom.play();
    x = 0;
    y = 0;
    x1 = 700;
    y1 = 500;
    document.getElementById("test1").style.left = x + "px";
    document.getElementById("test1").style.top = y + "px";
    document.getElementById("test2").style.left = x1 + "px";
    document.getElementById("test2").style.top = y1 + "px";
    document.getElementById("test1").style.backgroundImage =
      "url('img/tankright.png')";
  }, 100);
}
