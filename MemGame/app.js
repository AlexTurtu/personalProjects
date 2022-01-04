document.addEventListener("DOMContentLoaded", () => {
  //Crate Array with the card used to play
  const cardArray = [
    {
      name: "cheseburger",
      img: "images/1.png",
    },
    {
      name: "cheseburger",
      img: "images/1.png",
    },
    {
      name: "fries",
      img: "images/2.png",
    },
    {
      name: "fries",
      img: "images/2.png",
    },
    {
      name: "hotdog",
      img: "images/3.png",
    },
    {
      name: "hotdog",
      img: "images/3.png",
    },
    {
      name: "ice-cram",
      img: "images/4.png",
    },
    {
      name: "ice-cram",
      img: "images/4.png",
    },

    {
      name: "milkshake",
      img: "images/5.png",
    },
    {
      name: "milkshake",
      img: "images/5.png",
    },
    {
      name: "pizza",
      img: "images/6.png",
    },
    {
      name: "pizza",
      img: "images/6.png",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenID = [];
  cardsWon = [];

  // create the game board

  function createBoard() {
    for (var i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for mathces
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneID = cardsChosenID[0];
    const optionTwoID = cardsChosenID[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneID].setAttribute("src", "images/white.png");
      cards[optionTwoID].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneID].setAttribute("src", "images/blank.png");
      cards[optionTwoID].setAttribute("src", "images/blank.png");
    }
    cardsChosen = [];
    cardsChosenID = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      alert("Congrats! You found em all");
    }
  }

  //flip cards
  function flipCard() {
    var cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute("src", cardArray[cardID].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();

  // write code above this
});
function reloadPage() {
  document.reload();
}
