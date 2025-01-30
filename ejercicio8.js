//Búsqueda de elementos en un arreglo: Crea un arreglo de nombres y dada una cadena con un nombre,
// verifica si ese nombre está presente en el arreglo y muestra un mensaje apropiado.

let arreglo = ["Jorge", "Juan", "Alberto", "Sergio"];
let buscar = "Alberto";

resultado = arreglo.includes(buscar);

console.log(`El arreglo de nombres es ${arreglo}`);

if (resultado) {
  console.log(`El nombre ${buscar} SÍ se encuentra en el arreglo`);
} else {
  console.log(`El nombre ${buscar} NO se encuentra en el arreglo`);
}

/*
Muestra:

El arreglo de nombres es Jorge,Juan,Alberto,Sergio
El nombre Alberto SÍ se encuentra en el arreglo
*/