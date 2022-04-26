const inputEl = document.querySelector('#font-size-control');
console.log(inputEl.value);
const textEl = document.querySelector('#text');
console.log(textEl.textContent);

inputEl.addEventListener('input', onInputValue);

function onInputValue(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
    
    console.log(event.currentTarget.value);

}
