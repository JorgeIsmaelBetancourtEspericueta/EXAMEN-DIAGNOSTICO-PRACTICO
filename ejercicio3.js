// Palíndromo: Dada una palabra y verifica si es un palíndromo (es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante).

let palabra = "rapar";

function esPalindromo(cadena) {
    return cadena === cadena.split("").reverse().join("");
}

console.log(`¿La palabra "${palabra}" es palíndromo? ${esPalindromo(palabra)}`);
//Muestra: ¿La palabra "rapar" es palíndromo? true
