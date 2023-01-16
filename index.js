let firstCard = getRandomCard();
let secondCard = getRandomCard();

let cards = [firstCard, secondCard];

sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

messageData = document.getElementById("messageEl");
let mycard = document.getElementById("cardNums");

function startGame() {
  renderGame();
}

function renderGame() {
  messageData = document.getElementById("messageEl");
  document.getElementById("cardSum").textContent = "Sum : " + sum;

  mycard.textContent = "Card:  ";

  for (let i = 0; i < cards.length; i += 1) {
    mycard.textContent += cards[i] + " ";
    
  }
  if (sum < 21) {
    message = "do you want to draw new card";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You have got Blackjack";
  } else {
    isAlive = false;
    message = "You are out of the game";
  }
  messageData.textContent = message;
}

document.getElementById("cardSum");

function newCard() {
  if (!hasBlackJack && isAlive) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function getRandomCard() {
  let myRoundNum = Math.floor(Math.random() * 13) + 1;

  if (myRoundNum > 10) {
    return 10;
  } else if (myRoundNum === 1) {
    return 11;
  } else {
    return myRoundNum;
  }
}

let score = {
  name: "bar",
  num: 22,
};

document.getElementById("d").textContent = score.name + ": $" + score.num;
