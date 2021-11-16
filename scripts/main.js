let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/lol.jpg') {
      miImage.setAttribute('src','images/1626855826_390787_1626856044_noticia_normal_recorte1.jpg');
    } else {
      miImage.setAttribute('src','images/lol.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Por favor, ingresa tu nombre.');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'WORDLS 2020 BIENVENIDO ' +  miNombre;
}


miBoton.onclick = function() {
  estableceNombreUsuario();
}
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'WORDLS 2020 BIENVENIDO ' +  miNombre;
  }
}