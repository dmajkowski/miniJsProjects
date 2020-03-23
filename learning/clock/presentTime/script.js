const clock = () => {
  const time = new Date();
  const clockNumbers = document.querySelector(".clock__numbers");

  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

  clockNumbers.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 1000);
