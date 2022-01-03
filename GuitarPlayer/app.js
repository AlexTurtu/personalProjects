function startPlay() {
  var bpmValue = document.querySelector("#bpmRange").value;
  var inputLettersA = document.querySelector("#textFieldID").value;
  var inputLetters = inputLettersA.split("");
  var background = document.querySelector("#gifDiv");
  background.style.backgroundImage = "url('img/animatedBackgound.gif')";
  var timeoutValue = bpmValue * 10;
  var i = 0;
}
