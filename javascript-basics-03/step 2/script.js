function toggle(input) {
    switch (input) {
        case 'show':
            document.getElementById('texte').style.display = 'block';
            break;
        case 'hide':
            document.getElementById('texte').style.display = 'none';
            break;
    }
  }