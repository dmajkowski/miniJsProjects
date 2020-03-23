const timer = () => {
  let counter = 0;
  const timerDiv = document.querySelector("div.timer");

  const iterator = () => {
    counter++;
    timerDiv.textContent = `${counter} sekund`;
  };
  return iterator;
};

const iterate = timer();

setInterval(iterate, 1000);
