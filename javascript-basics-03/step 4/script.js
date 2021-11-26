var pass1Val = document.getElementById('password');
var pass2Val = document.getElementById('confirmation');

function validate() {
    if (pass1Val.value != pass2Val.value) {
        Array.from(document.querySelectorAll('input')).forEach(element => element.style.borderColor = 'red');
    }
    else {
        Array.from(document.querySelectorAll('input')).forEach(element => element.style.borderColor = 'initial');
    }
}