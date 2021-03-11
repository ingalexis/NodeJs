// Busqueda de vocales con match

let vocales = /[aeiou]/gi;
let text = "Hola bienvenidos al curso nodejs ejercicio vocales, TAMBIEN MAYUSCULAS";
console.log(text.match(vocales));