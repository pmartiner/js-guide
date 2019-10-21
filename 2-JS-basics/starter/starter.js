// La notación "camel-case" singinifca que, cuando la variable representa un nombre con
// espacios, en lugar de escribir el espacio, juntamos los nombres y los separamos con mayúsculas.

// REGLAS DE NOMBRAMIENTO DE VARIABLES: 
// 1. Las variables no pueden empezar con números ni signos (salvo $ y _)
// 2. 

var firstName = 'Pablo';
var lastName = 'Martínez';
var age = 24;
var job; // tipo undefined
var nan = NaN; // tipo Number
var zero = null; // tipo Null

// Hay 5 tipos de variables
// Number: integers, double, floats, etc.
// String: cadena de caracters
// Booleano: valores binarios => true o false
// Undefined: variable que no tiene ningún valor asignado
// Null: la variable no existe

console.log(`Me llamo ${firstName} ${lastName} y tengo ${age} años`);
console.log(true);
console.log("job", job);
job = 'Web developer';
console.log("job", job);
console.log(nan);
console.log(zero);