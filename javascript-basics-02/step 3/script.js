document.querySelector('#name').addEventListener('blur', function(){
    document.querySelector('#text-div').innerHTML = '<p>' + document.querySelector('#name').value + '</p>';
});