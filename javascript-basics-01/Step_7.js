function onClick() {
    var size = document.getElementById('shoe_size').value;
    var birth = document.getElementById('year').value;
    var result = ((((size * 2) + 5) * 50) - birth + 1766);
    alert ('Resust: ' + result);
  }