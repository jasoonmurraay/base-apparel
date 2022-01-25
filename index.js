const button = document.querySelector('button');
const input = document.querySelector('input');



button.addEventListener('click', function () {
    if (input.value === '') {
        event.preventDefault();
        errorMsg();
        return false;
    } if (input.value.indexOf('@') === -1) {
        event.preventDefault();
        errorMsg();
    } if (input.value.indexOf('@') === (input.value.length - 1)) {
        event.preventDefault();
        errorMsg();
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


