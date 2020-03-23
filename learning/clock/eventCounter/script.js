const endTime = new Date("2020-02-18 22:34:00").getTime();

const daysSpan = document.querySelector("span.days");
const hoursSpan = document.querySelector("span.hours");
const minutesSpan = document.querySelector("span.minutes");
const secondsSpan = document.querySelector("span.seconds");

setInterval(() => {
  const nowTime = new Date().getTime();
  const time = endTime - nowTime;

  const days = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );

  const hours =
    Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;

  const minutes =
    Math.floor(endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60;

  const seconds = Math.floor(endTime / 1000 - nowTime / 1000) % 60;

  days < 10
    ? (daysSpan.textContent = `0${days}`)
    : (daysSpan.textContent = days);
  hours < 10
    ? (hoursSpan.textContent = `0${hours}`)
    : (hoursSpan.textContent = hours);
  minutes < 10
    ? (minutesSpan.textContent = `0${minutes}`)
    : (minutesSpan.textContent = minutes);
  seconds < 10
    ? (secondsSpan.textContent = `0${seconds}`)
    : (secondsSpan.textContent = seconds);
}, 1000);
