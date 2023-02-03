"use strict";

const currentYear = new Date().getFullYear();
const userButton = document.querySelector(".button");
const message = document.querySelector(".message");
const resetButton = document.querySelector(".reset");
const resetBtnImg = document.querySelector(".reset-img");
const input = document.querySelector(".input");
const container = document.querySelector(".con");

const userMessage = (message) =>
  (document.querySelector(".message").textContent = message);

message.textContent = "";

userButton.addEventListener("click", function () {
  const userInput = Number(document.querySelector(".input").value);
  message.style.visibility = "visible";
  container.style.padding = "5rem 0";

  if (!userInput) {
    userMessage("⛔ Pls enter a birth year");
  } else if (userInput) {
    userInput <= 1900 || userInput >= currentYear
      ? userMessage("Common, you can't be serious 😆")
      : userMessage(`That's ${currentYear - userInput} years of age 😉`);
  }
});

resetButton.addEventListener("click", function () {
  resetBtnImg.style.transform = "rotate(-358deg)";
  userMessage("");
  input.value = "";
});
