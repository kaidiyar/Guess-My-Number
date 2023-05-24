"use strict";

// document.querySelector(".message").textContent = "🎉 You Win!";

// document.querySelector(".mark").textContent = 14;
// document.querySelector(".score").textContent = 18;

// document.querySelector(".guess").value = 22;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 64) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayMark = function (number) {
  document.querySelector(".mark").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
const styleBody = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const styleMark = function (width) {
  document.querySelector(".mark").style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess && guess !== 0) {
    displayMessage("⛔️ No number!");
    // When player wins
  } else if (guess > 64 || guess < 1) {
    displayMessage("❌ Out of the range!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 You Win!");
    displayMark(secretNumber);

    styleBody("#3ebe41");
    styleMark("30rem");

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
    // When guess is too low
  } else if (guess !== secretNumber) {
    // DRY method for a clean code
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 64) + 1;
  displayMessage(`Why didn't you start? Start guessing 😤`);
  displayScore(score);
  displayMark("?");
  document.querySelector(".guess").value = "";
  styleBody("#0d1821");
  styleMark("15rem");
});

// Do for all repetetive staff and then use this code to make a github repository
