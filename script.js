const passwordInput = document.querySelector("input[name='password']");
const confirmPassword = document.querySelector("input#password-cnf");
const divMessage = document.querySelector("div.error");

passwordInput.addEventListener('input', () => {
    if (passwordInput.value === confirmPassword.value && passwordInput.value !== "") {
        console.log('hello');
        passwordInput.classList.remove('error');
        passwordInput.classList.add('matching');
        confirmPassword.classList.remove('error');
        confirmPassword.classList.add('matching');
        divMessage.classList.remove('error');
    } else {
        passwordInput.classList.add('error');
        confirmPassword.classList.add('error');
        divMessage.classList.add('error');
    }
})

confirmPassword.addEventListener('input', () => {
    if (passwordInput.value === confirmPassword.value && passwordInput.value !== "") {
        console.log('hello');
        passwordInput.classList.remove('error');
        passwordInput.classList.add('matching');
        confirmPassword.classList.remove('error');
        confirmPassword.classList.add('matching');
        divMessage.classList.remove('error');
    } else {
        passwordInput.classList.add('error');
        confirmPassword.classList.add('error');
        divMessage.classList.add('error');
    }
})