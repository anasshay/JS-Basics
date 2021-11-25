document.querySelector('button').addEventListener('click', function () {
    var input = document.querySelectorAll('input');
    var inputs = Array.from(input);
    if (confirm('All fields will be empty, confirm?')) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    }
});