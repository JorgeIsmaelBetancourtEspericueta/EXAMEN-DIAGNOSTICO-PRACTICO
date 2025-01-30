/* 2. Reversión de cadena: Dada una frase y luego muestra la misma frase pero con las palabras en orden inverso.  */

const cadena = "Eres el mejor";

const invertir = cadena.split(" ").reverse().join(" "); 

console.log("La cadena: " + cadena + "\nsi la invertimos es: " + invertir);


//Muestra: La cadena: Eres el mejor
// si la invertimos es: mejor el Eres