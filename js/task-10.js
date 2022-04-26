const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

const boxes = [];
let boxSize = 20;
function createBoxes() {
  for (let i = 0; i < inputRef.firstElementChild.value; i += 1) {
    const boxEl = document.createElement('div');
    boxSize += 10;
    boxEl.style.width = boxSize + 'px';
    boxEl.style.height = boxSize + 'px';
    boxEl.style.backgroundColor = getRandomHexColor();
    boxes.push(boxEl);
  }
  boxesRef.append(...boxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxesRef.remove();
}