function cKey(keyValue) {
  navigator.vibrate(2);
  if (keyValue == "A") {
    new Audio("piano-mp3/A3.mp3").play();
  } else if (keyValue == "B") {
    new Audio("piano-mp3/B3.mp3").play();
  } else if (keyValue == "C") {
    new Audio("piano-mp3/C3.mp3").play();
  } else if (keyValue == "D") {
    new Audio("piano-mp3/D3.mp3").play();
  } else if (keyValue == "E") {
    new Audio("piano-mp3/E3.mp3").play();
  } else if (keyValue == "F") {
    new Audio("piano-mp3/F3.mp3").play();
  } else if (keyValue == "G") {
    new Audio("piano-mp3/G3.mp3").play();
  }
}
function blackKey(keyValue) {
  navigator.vibrate(2);
  if (keyValue == "A") {
    new Audio("piano-mp3/Ab3.mp3").play();
  } else if (keyValue == "G") {
    new Audio("piano-mp3/Gb3.mp3").play();
  } else if (keyValue == "F") {
    new Audio("piano-mp3/Eb3.mp3").play();
  } else if (keyValue == "D") {
    new Audio("piano-mp3/Db3.mp3").play();
  } else if (keyValue == "C") {
    new Audio("piano-mp3/Db3.mp3").play();
  }
}
