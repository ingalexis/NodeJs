const fs = require('fs');

console.log("\n\nLectura sincrona:\n");
//Lectura sincrona
let texto = fs.readFileSync('test.txt', 'utf-8');
console.log(texto);

console.log("\n\nLectura asincrona:\n");
//Lectura asincrona
fs.readFile('test.txt', 'utf-8', (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data);
});