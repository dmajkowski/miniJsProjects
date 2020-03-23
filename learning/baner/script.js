const slideList = [
  {
    img: "./photos/13.jpg",
    text: "Pierwszy tekst."
  },
  {
    img: "./photos/19.jpg",
    text: "Drugi tekst."
  },
  {
    img: "./photos/8.jpg",
    text: "Trzeci tekst."
  }
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];
// Interfejs
const time = 5000;
let active = 0;

//Implementacja

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};

let startSlider = setInterval(changeSlide, time);

const keyChangeSlide = e => {
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(startSlider);
    e.keyCode == 37 ? active-- : active++;

    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    startSlider = setInterval(changeSlide, time);
    console.log(active);
  }
};

window.addEventListener("keydown", keyChangeSlide);
