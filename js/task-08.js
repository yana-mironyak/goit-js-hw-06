const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubit);

function onFormSubit(event) {
    event.preventDefault();
    const mail = event.currentTarget.elements.email.value;
    const pass = event.currentTarget.elements.password.value;
    if (mail === '' || pass === '') {
        alert('Введите логин или пароль');
    } else {
        const formData = {
           mail, pass 
        }
        console.log(formData);
    }
    event.currentTarget.reset();
}
