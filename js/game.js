import cardData from "./cardData.js";

document.addEventListener("DOMContentLoaded", () => {
  const randomData = cardData.sort(() => Math.random() - 0.5);

  const boardGame = document.querySelector(".game-board");
  const retry = document.querySelector(".retry-btn");
  const infoTxt = document.querySelector(".section-text #info-text");
  const infoImg = document.querySelector(".section-text #info-img");
  const cardsImg = document.querySelectorAll(".card");

  let cardsChosen = [];
  let cardsChosenId = [];
  const cardsWon = [];

  function createBoard() {
    for (let i = 0; i < randomData.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "../assets/cards/Blank.png");
      card.setAttribute("class", "card");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      boardGame.appendChild(card);
    }
  }

  function checkMath() {
    let cards = document.querySelectorAll(".card");
    const cardOneId = cardsChosenId[0];
    const cardTwoId = cardsChosenId[1];

    if (cardOneId == cardTwoId) {
      cards[cardOneId].setAttribute("src", "../assets/cards/Blank.png");
      cards[cardTwoId].setAttribute("src", "../assets/cards/Blank.png");
    } else if (cardsChosen[0] == cardsChosen[1]) {
      cards[cardOneId].removeEventListener("click", flipCard);
      cards[cardTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
      infoImg.setAttribute("src", `../assets/faces/${cardsChosen[0]}.png`);
    } else {
      cards[cardOneId].setAttribute("src", "../assets/cards/Blank.png");
      cards[cardTwoId].setAttribute("src", "../assets/cards/Blank.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    if (cardsWon.length == randomData.length / 2) {
      infoTxt.innerHTML = "Cnogratulations!! You discovered all cards!";
      infoImg.setAttribute("src", "../assets/faces/win.svg");
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(randomData[cardId].title);
    cardsChosenId.push(cardId);
    this.setAttribute("src", randomData[cardId].url);
    if (cardsChosen.length === 2) {
      setTimeout(checkMath, 500);
    }
  }

  createBoard();
});
