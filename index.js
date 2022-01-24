const button = document.querySelector('button');
const input = document.querySelector('input');



button.addEventListener('click', function () {
    if (input.value === '') {
        event.preventDefault();
        errorMsg();
        return false;
    }
})

function errorMsg() {
    const errorIcon = document.querySelector('.errorIcon')
    const errorMsg = document.querySelector('.errorMsg')
    errorIcon.style.display = 'block'
    errorMsg.style.display = 'block'
    const form = document.querySelector('form');
    form.style.borderColor = 'hsl(0, 93%, 68%)';
}

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

