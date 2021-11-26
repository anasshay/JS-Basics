
var color = document.querySelectorAll('.color');
var div = document.getElementById('text');
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function() {
        div.style.color = color[i].classList[1];
    });
    
}