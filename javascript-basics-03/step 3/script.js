// var color = document.querySelectorAll('.color');
// for (let i = 0; i < color.length; i++) {
//     color[i].addEventListener('click', function() {
//         div.style.color = color[i].classList[1];
//     });

// }

var div = document.getElementById('text');
document.addEventListener('click', function (event) {
    var val = event.target.classList[1];
    div.style.color = val;
});