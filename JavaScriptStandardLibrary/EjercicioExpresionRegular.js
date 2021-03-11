// Ejercicio expresión regular

//  Cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.

let texto = "LAS EXPRESIONES R1EGULARES Y SUS CONDICIONES";

let condicion1 = /[^AEIOU0-9\ ]/g;

console.log(texto.match(condicion1));

/* 
* A veces nos intersa no sólo saber si una cadena cumple un determinado patrón, sino extraer determinadas partes de él. 
* Por ejemplo, si una fecha está en el formato "27/11/2012" puede interesarnos extraer los números. 
* Una expresión regular que vale para esta cadena puede ser
*/

let fecha = "27/11/2012";

let condicion2 = /(\d{2})\/(\d{2})\/(\d{4})/;

console.log(fecha.match(condicion2));

// Escoger un algoritmo excepto El algoritmo de la Criba de Eratóstenes y utilizar los typed arrays en javascript. Del archivo pdf



// Programe una expresión regular que de este texto  "'hola tu' tururú" obtenga ["'hola tu'", "'"]

let texto = "'hola tu' tururú";

let condicion3 =  /(["']).*\1/;

console.log(texto.match(condicion3));

// Programe una expresión regular que de este texto   "papa" tururú" obtenga ["papa", "pa"]

let texto = '"papa" tururú"';

let condicion4 = /(pa){2}/;

console.log(texto.match(condicion4));


// Programe una expresión regular que de este texto  "java es güay" obtenga ["java"]

let texto = "java es güay";

let condicion5 = /\bjava\b/;

console.log(texto.match(condicion5));

// Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10"]

let texto = "11 millas 10 km";

let condicion6 = /\d+(?= km)/;

console.log(texto.match(condicion6));


// Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10 km"]


let texto = "11 millas 10 km";

let condicion7 = /\d+ km/;

console.log(texto.match(condicion7));


// Programe una expresión regular que de este texto   "11.22" obtenga [".22"] 


let texto = "11.22";

let condicion8 = /(?=\.)\.\d+/;

console.log(texto.match(condicion8));

// Programe una expresión regular que de este texto    "11 km 12 km 14 m" obtenga ["14"]

let texto = "11 km 12 km 14 m";

let condicion9 = /\d{2}(?! km)/;

console.log(texto.match(condicion9));

// ¿Porque devuelve null  "hola".match(/HOLA/) y como arreglarlo para que devuelva ["hola"]?

// R/ porque la expresión valida mayusculas, tocaria agregar la bandera i al final de la expresion para que no importe si es mayuscula o minuscula
console.log("hola".match(/HOLA/));
console.log("hola".match(/HOLA/i));

// Programe una expresión regular que de este texto  "hola\ntu" obtenga ["tu"]

let texto = "hola\ntu";

let condicion10 = /^tu/m;

console.log(texto.match(condicion10));








