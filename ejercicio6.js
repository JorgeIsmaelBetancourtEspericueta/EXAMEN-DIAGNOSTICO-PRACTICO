//Filtrado de elementos en un arreglo: Crea un arreglo de números y filtra los elementos
// para mostrar solo aquellos que sean mayores que un valor dado por el usuario.

let arreglo = [1, 5, 20, 3, 17, 33, 59, 42];
let numero = 16;

const filtrado = arreglo.filter((element) => element > numero);

console.log(`Arreglo antes de filtrarlo con los número mayores a ${numero}: ${arreglo}`);
console.log(`Arreglo después de filtrarlo ${filtrado}`)

/*Muestra:

Arreglo antes de filtrarlo con los número mayores a 16: 1,5,20,3,17,33,59,42
Arreglo después de filtrarlo 20,17,33,59,42
 */
