// Fig. 10.8: SumaArreglo.js
// Suma de los elementos de un arreglo con for y for in
function iniciar(){
    var elArreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var total1 = 0, total2 = 0;

    // itera a través de los elementos del arreglo en orden y suma 
    // el valor de cada elemento a total1
    var longitud = elArreglo.length; // obtener la longitud del arreglo una vez antes del ciclo

    for( var i = 0; i < elArreglo.length; ++i){
        total1 += elArreglo[ i ];
    } // fin de for

    var resultados ="<p>Total usando &iacute;ndices: " + total1 + "</p>";

    for( var elemento in elArreglo ){
        total2 += elArreglo[ elemento ];
    } // fin de for

    resultados += "<p>Total usando for...in: " + total2 + "</p>";
    document.getElementById("salida").innerHTML = resultados;
}

window.addEventListener("load", iniciar, false);