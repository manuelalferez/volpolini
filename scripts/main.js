
//Añadiendo un cambiador de imagen 

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/2.png') {
      miImage.setAttribute('src','images/3.png');
    } else {
      miImage.setAttribute('src', 'images/2.png');
    }
}