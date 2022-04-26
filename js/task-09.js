const backgroundRef = document.querySelector('.widget');
const btnRef = document.querySelector('.change-color');
const textEl = document.querySelector('.color');


btnRef.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor() {
  backgroundRef.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
