

var div = document.getElementById('text');
// document.addEventListener('click', function (event) {
//     var val = event.target.classList[1];
//     div.style.color = val;
// });

document.querySelectorAll('.color').forEach (item => {
    item.addEventListener('click', function() {
        div.style.color = item.classList[1];
    });
});