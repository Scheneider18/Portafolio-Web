// Fig. 10.12: ImagenAleatoria.js
// Selección de imágenes al azar usando arreglos
var imgIcono;
var imagenes = ["ECP","TPE","BPP","GUI","REND","PORT","OIS"];
var descripciones = ["Error común de programación", "Tip para prevenir errores","Buena práctica de programación", 
    "Observación de apariencia visual", "Tipo de rendimiento", "Tip de portabilidad", 
    "Observación de ingeniería de software"];

// elegir una imagen al azar y su descripción correspondiente, después modificar
// el elemento img en el cuerpo del documento
function elegirImagen(){
    var indice = Math.floor(Math.random() * 7);
    imgIcono.setAttribute("src", imagenes[indice] + ".png");
    imgIcono.setAttribute("alt", descripciones[indice]);
} // fin de la función elegirImagen

// registrar el manejador de eventos clic de imgIcono
function iniciar(){
    imgIcono = document.getElementById("imagen");
    imgIcono.addEventListener("click", elegirImagen, false);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);