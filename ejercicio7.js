//Concatenación de arreglos: Crea dos arreglos de strings y luego concatenarlos en un solo arreglo.

const array1 = ["México","Argentina","Brasil","Colombia"];
const array2 = ["CDMX","BA","SP","BGT"];

const arreglo = array1.concat(array2);

console.log(`Arreglo 1: ${array1}`)
console.log(`Arreglo 2: ${array2}`)
console.log(`Arreglo concatenado: ${arreglo}`)

/*Muestra:

Arreglo 1: México,Argentina,Brasil,Colombia
Arreglo 2: CDMX,BA,SP,BGT

Arreglo concatenado: México,Argentina,Brasil,Colombia,CDMX,BA,SP,BGT

*/