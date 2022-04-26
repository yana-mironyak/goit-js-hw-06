const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onImputChange);

function onImputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameOutput.textContent = event.currentTarget.value;
};

