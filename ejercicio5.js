// Suma de elementos de un arreglo: Crea un arreglo de números y calcula la suma de todos sus elementos.

let arreglo = [2, 4, 20, 40, 67, 94];

function sumarElementos(array) {
  let suma = 0;
  for (let i of array) {
    suma += i;
  }
  return suma;
}

console.log(`Arreglo que se desea sumar: ${arreglo}`)
console.log(`La suma es igual a ${sumarElementos(arreglo)}`)

/*Muestra:

Arreglo que se desea sumar: 2,4,20,40,67,94
La suma es igual a 227
 */
