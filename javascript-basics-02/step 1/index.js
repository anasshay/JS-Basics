
var image1 = document.querySelector('#image1');
image1.onmouseover = function (){
    image1.src = 'images/image1_2.jpg';
};
image1.onmouseout = function () {
    image1.src = 'images/image1.jpg';
};