const timerDisplay = document.querySelector(".time div");
const startButton = document.querySelector("button.main");
const resetButton = document.querySelector("button.reset");

let time = 0;
let active = false;
let idI;

const timer = () => {
  if (!active) {
    active = !active;
    startButton.textContent = " Pauza ";
    idI = setInterval(start, 10);
  } else {
    active = !active;
    startButton.textContent = " Start ";
    clearInterval(idI);
  }
};

const start = () => {
  time++;
  timerDisplay.textContent = (time / 100).toFixed(2);
};

const reset = () => {
  time = 0;
  timerDisplay.textContent = " --- ";
  active = false;
  clearInterval(idI);
  startButton.textContent = " Start ";
};

startButton.addEventListener("click", timer);
resetButton.addEventListener("click", reset);
