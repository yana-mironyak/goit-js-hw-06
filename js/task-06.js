const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (inputRef.dataset.length == event.currentTarget.value.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else { 
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
}



