// Directorios

console.log(_filename); // Ruta absoluta actual del archivo que contiene el codigo actual es decir Node.js
console.log(_dirname); // Ruta directorio actual que contiene _filename
//console.log(os.homedir()); // Muestra la ruta del directorio home del usuario actual

const path = require("path");

console.log(path.sep); // Define el / o \ segun el sistema operativo

let directorio = "src/pkg/test.js";
console.log(path.basename(directorio));