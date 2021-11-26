var images = document.querySelectorAll('img');
var imagesArr = Array.from(images);

function swap(p) {
    switch (p) {
        case 1:
            imagesArr[0].src = 'images/image1_2.jpg';
            break;
        case 2:
            imagesArr[1].src = 'images/image2_2.jpg';
            break;
        case 3:
            imagesArr[2].src = 'images/image3_2.jpg';
            break;
        case 4:
            imagesArr[3].src = 'images/image4_2.jpg';
            break;
        case 5:
            imagesArr[4].src = 'images/image5_2.jpg';
            break;
    }
  }

