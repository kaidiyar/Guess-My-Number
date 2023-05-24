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

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 You Win!");
    document.querySelector(".mark").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#3ebe41";

    document.querySelector(".mark").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is too low
  } else if (guess !== secretNumber) {
    // DRY method for a clean code
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 64) + 1;
  displayMessage(`Why didn't you start? Start guessing 😤`);
  document.querySelector(".score").textContent = score;
  document.querySelector(".mark").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#0d1821";
  document.querySelector(".mark").style.width = "15rem";
});

// Do for all repetetive staff and then use this code to make a github repository
